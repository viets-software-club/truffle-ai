package discord

import (
	"github.com/jackc/pgx/v5/pgtype"
	discordApi "github.com/viets-software-club/truffle-ai/graphql-server/api/discord"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertDiscordInvitesToTIvalsDiscordInvite(invites *[]discordApi.DiscordInviteResponse) (pgtype.FlatArray[types.T_ivals_discord_invite], error) {
	if invites == nil {
		return nil, nil
	}

	var pgDiscordInvites pgtype.FlatArray[types.T_ivals_discord_invite]
	// val := types.T_ivals_discord_invite{
	// 			Discord_invite_code:      helper.StringToNoEmptyPgText("48VycPe2ZX"),
	// 			Guild_id:                 helper.StringToNoEmptyPgText("1031224392174293002"),
	// 			Guild_name:               helper.StringToNoEmptyPgText("ggez"),
	// 			Approximate_member_count: helper.IntToPgInt8(49),
	// 			Expires_at: 			 pgtype.Timestamptz{Valid: false},
	// 		}
	// pgDiscordInvites = append(pgDiscordInvites, val)
	for _, invite := range *invites {
	
		// fmt.Printf("Invites: %+v, Type: %T\n", invite, invite)
		// val1 := reflect.ValueOf(invite)
		// for i := 0; i < val1.NumField(); i++ {
		// 	field := val1.Type().Field(i)
		// 	fmt.Printf("Field Name: %s, Field Type: %s\n", field.Name, field.Type)
		// }

		// val1 = reflect.ValueOf(invite.Guild)
		// for i := 0; i < val1.NumField(); i++ {
		// 	field := val1.Type().Field(i)
		// 	fmt.Printf("Field Name: %s, Field Type: %s\n", field.Name, field.Type)
		// }

		val := types.T_ivals_discord_invite{
			Discord_invite_code:      helper.StringToNoEmptyPgText(invite.Code),
			Guild_id:                 helper.StringToNoEmptyPgText(invite.Guild.ID),
			Guild_name:               helper.StringToNoEmptyPgText(invite.Guild.Name),
			Approximate_member_count: helper.IntToPgInt8(invite.ApproximateMemberCount),
		}
		if invite.ExpiresAt != nil {
			val.Expires_at = pgtype.Timestamptz{Time: *invite.ExpiresAt, Valid: true}
		}

		pgDiscordInvites = append(pgDiscordInvites, val)

	}
	return pgDiscordInvites, nil
}
