package discord

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"regexp"
	"strings"
	"time"
)

type DiscordAPI struct {
	// Session *discordgo.Session
}
type DiscordInviteResponse struct {
	Code    string `json:"code"`
	Guild   Guild  `json:"guild"`
	Channel struct {
		ID   string `json:"id"`
		Name string `json:"name"`
		Type int    `json:"type"`
	} `json:"channel"`
	ApproximatePresenceCount int        `json:"approximate_presence_count"`
	ApproximateMemberCount   int        `json:"approximate_member_count"`
	ExpiresAt                *time.Time `json:"expires_at"`
}

type Guild struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func New() (*DiscordAPI, error) {
	// session, err := discordgo.New("Bot " + os.Getenv("DISCORD_BOT_TOKEN"))
	// if err != nil {
	// 	panic(err)
	// }

	return &DiscordAPI{
		// Session: session,
	}, nil
}

func (api *DiscordAPI) GetInvite(code string) (*DiscordInviteResponse, error) {
	// return api.Session.Invite(code, func(cfg *discordgo.RequestConfig) {
	// 	cfg.Request.Header.Set("with_counts", "true")
	// 	cfg.Request.Header.Set("with_expiration", "true")
	// })
	req, err := http.NewRequest("GET", fmt.Sprintf("https://discord.com/api/invites/%s?with_counts=true&with_expiration=true", code), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Authorization", fmt.Sprintf("Bot %s"+os.Getenv("DISCORD_BOT_TOKEN")))
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var invite DiscordInviteResponse
	err = json.Unmarshal(body, &invite)
	if err != nil {
		log.Println("Error unmarshalling discord invite response, probably rate-limited", err)
		return nil, nil
	}

	return &invite, nil
}

func GetDiscordInviteCodesFromDiscordInviteLinksInString(str string) []string {
	re := regexp.MustCompile(`https?:\/\/(?:www\.)?discord(?:app)?\.com\/invite\/([^\s/]+)|https?:\/\/(?:www\.)?discord\.gg\/([a-zA-Z0-9]+)`)
	matches := re.FindAllStringSubmatch(str, -1)

	set := make(map[string]*struct{})
	for _, match := range matches {
		if strings.TrimSpace(match[1]) != "" {
			set[strings.TrimSpace(match[1])] = nil
		} else if strings.TrimSpace(match[2]) != "" {
			set[strings.TrimSpace(match[2])] = nil
		}
	}
	codes := make([]string, 0, len(set))
	for code := range set {
		codes = append(codes, code)
	}

	return codes
}
