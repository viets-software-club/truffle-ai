<script lang="ts">
import SplitIcon from "$lib/components/pure/SplitIcon.svelte";
import * as Tooltip from "$lib/components/pure/ui/tooltip/index.js";
import client from "$lib/graphql/supabase/client";
import { RepoSidebarByGthbRepoIdDocument } from "$lib/graphql/supabase/generated-codegen";
import { cn } from "$lib/utils";
import CalendarIcon from "lucide-svelte/icons/calendar";
import CircleDotIcon from "lucide-svelte/icons/circle-dot";
import FolderGit2Icon from "lucide-svelte/icons/folder-git-2";
import GitForkIcon from "lucide-svelte/icons/git-fork";
import GitPullRequestArrow from "lucide-svelte/icons/git-pull-request-arrow";
import LinkIcon from "lucide-svelte/icons/link";
import LinkedinIcon from "lucide-svelte/icons/linkedin";
import MailIcon from "lucide-svelte/icons/mail";
import StarIcon from "lucide-svelte/icons/star";
import TwitterIcon from "lucide-svelte/icons/twitter";
import UsersRoundIcon from "lucide-svelte/icons/users-round";
import { DateTime } from "luxon";
import { toast } from "svelte-sonner";

type Props = {
	githubRepoId?: number;
	githubOwnerId?: number;
	class?: string;
};
const { githubRepoId, githubOwnerId, ...attrs }: Props = $props();
let metricSection: any[] | undefined = $state();
let languages: any[] | undefined = $state();
let contributors: any[] | undefined = $state();
let discordInvites: any[] | undefined = $state();
let owner: any = $state();
let repo: any = $state();

const loadData = () => {
	if (githubOwnerId && githubRepoId)
		client
			.query({
				query: RepoSidebarByGthbRepoIdDocument,
				variables: {
					gthbRepoId: githubRepoId,
					ownerId: githubOwnerId,
				},
			})
			.then((res) => {
				if (res?.data?.gthbRepoCollection?.edges[0]?.node) {
					const node = res?.data?.gthbRepoCollection?.edges[0]?.node;

					metricSection = [
						{
							icon1: StarIcon,
							value: node.stargazerCount,
							tooltipLabel: "Stars",
							label: "Stars",
						},
						{
							icon1: CircleDotIcon,
							value: node.issuesTotalCount,
							tooltipLabel: "Issues",
							label: "Issues",
						},
						{
							icon1: GitForkIcon,
							value: node.forkCount,
							tooltipLabel: "Forks",
							label: "Forks",
						},
						{
							icon1: GitPullRequestArrow,
							value: node.pullRequestsTotalCount,
							tooltipLabel: "Pull Requests",
							label: "PRs",
						},
						{
							icon1: UsersRoundIcon,
							value: node.contributorCount,
							tooltipLabel: "Contributors",
							label: "Contrib.",
						},
						{
							icon1: StarIcon,
							icon2: UsersRoundIcon,
							value: node.stargazersPerContributor,
							tooltipLabel: "Stars/Contrib.",
							label: "Stars/Contrib.",
						},
						{
							icon1: CircleDotIcon,
							icon2: UsersRoundIcon,
							value: node.issuesPerContributor,
							tooltipLabel: "Issues/Contrib.",
							label: "Issues/Contrib.",
						},
						{
							icon1: GitForkIcon,
							icon2: UsersRoundIcon,
							value: node.forksPerContributor,
							tooltipLabel: "Forks/Contrib.",
							label: "Forks/Contrib.",
						},
						{
							icon1: GitPullRequestArrow,
							icon2: UsersRoundIcon,
							value: node.pullRequestsPerContributor,
							tooltipLabel: "PRs/Contrib.",
							label: "PRs/Contrib.",
						},
					];
					const linkedinCompanyUrl =
						res?.data?.gthbRepoCollection.edges[0]?.node?.gthbRepo
							?.projRepoAndSbotLinCompanyCollection?.edges[0]?.node
							.sbotLinCompany?.sbotLinCompanyUrl || "";
					const linkedinProfileUrl =
						res?.data?.gthbRepoCollection.edges[0]?.node?.gthbRepo
							?.projRepoAndSbotLinProfileCollection?.edges[0]?.node
							?.sbotLinProfile?.sbotLinProfileUrl || "";
					discordInvites =
						res?.data?.gthbRepoCollection.edges[0]?.node?.gthbRepo?.projRepoAndDiscordInviteCollection?.edges.map(
							(node) => node.node.discordInvite,
						) || null;
					// console.log(discordInvites);
					const ownerTemp = {
						avatarUrl: node.gthbOwner.avatarUrl,
						login: node.gthbOwner.gthbOwnerLogin,
						url: node.gthbOwner.gthbOwnerUrl,
						linkedinUrl: linkedinCompanyUrl || linkedinProfileUrl || undefined,
					};

					if (node.gthbOwner.gthbOwnerType === "User") {
						owner = {
							...ownerTemp,
							name:
								res?.data?.gthbUserCollection?.edges[0]?.node?.gthbUserName ||
								"",
							websiteUrl:
								res?.data?.gthbUserCollection?.edges[0]?.node?.websiteUrl || "",
							bio: res?.data?.gthbUserCollection?.edges[0]?.node?.bio || "",
							company:
								res?.data?.gthbUserCollection?.edges[0]?.node?.company || "",
							createdAt:
								res?.data?.gthbUserCollection?.edges[0]?.node?.createdAt || "",
							email: res?.data?.gthbUserCollection?.edges[0]?.node?.email || "",
							followersTotalCount:
								res?.data?.gthbUserCollection?.edges[0]?.node
									?.followersTotalCount || "",
							twitterUsername:
								res?.data?.gthbUserCollection?.edges[0]?.node
									?.twitterUsername || "",
						};
					} else {
						owner = {
							...ownerTemp,
							name:
								res?.data?.gthbOrgCollection?.edges[0]?.node?.gthbOrgName || "",
							websiteUrl:
								res?.data?.gthbOrgCollection?.edges[0]?.node?.websiteUrl || "",
							description:
								res?.data?.gthbOrgCollection?.edges[0]?.node
									?.gthbOrgDescription || "",
							email: res?.data?.gthbOrgCollection?.edges[0]?.node?.email || "",
							twitterUsername:
								res?.data?.gthbOrgCollection?.edges[0]?.node?.twitterUsername ||
								"",
							gthbOrgId:
								res?.data?.gthbOrgCollection?.edges[0]?.node?.gthbOrgId || "",
							descriptionHtml:
								res?.data?.gthbOrgCollection?.edges[0]?.node?.descriptionHtml ||
								"",
						};
					}

					repo = {
						url: node.gthbRepoUrl,
						createdAt: DateTime.fromISO(node.createdAt).toFormat("dd.LL.yyyy"),
						ownerLogin: node.gthbOwner.gthbOwnerLogin,
						repoName: node.gthbRepoName,
					};

					languages = node.gthbRepoAndGthbLangCollection.edges.map(
						({ node }: any) => ({
							name: node.gthbLang.gthbLangName,
							color: node.gthbLang.color,
						}),
					);

					contributors = node.gthbRepoContrCollection.edges
						.filter(
							({ node }: any) => node.gthbOwner.gthbOwnerLogin !== owner.login,
						)
						.map(({ node }: any) => {
							return {
								contributions: node.contributions,
								avatarUrl: node.gthbOwner.avatarUrl,
								login: node.gthbOwner.gthbOwnerLogin,
								url: node.gthbOwner.gthbOwnerUrl,
							};
						});
				}
			})
			.catch((e) => {
				console.error(e);
				toast.error("Error", {
					description:
						"An error occurred while loading the right sidebar. Please try again..",
					action: {
						label: "ok",
						onClick: () => {},
					},
				});
			});
};
loadData();
</script>

<aside
	{...attrs}
	class={cn(
		'w-full md:w-1/4 lg:w-1/6  overflow-x-hidden overflow-y-hidden md:overflow-y-hidden border-l border-t truncate whitespace-nowrap',
		attrs?.class ? attrs.class : ''
	)}
>
	<section class=" py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">GitHub Stats</h2>
		{#if metricSection}
			<ul class="grid grid-cols-3 md:block">
				{#each metricSection as { icon1: Icon1, icon2, value, tooltipLabel, label }}
					<li>
						<Tooltip.Root>
							<Tooltip.Trigger class="cursor-pointer flex items py-2 gap-2 items-center">
								{#if icon2}
									<SplitIcon
										icon1={Icon1}
										{icon2}
										class="w-4 h-4 text-foreground/80"
										iconProps={{ class: 'w-2 h-2' }}
									/>
								{:else}
									<Icon1 class="w-3.5 h-3.5 text-foreground/50" />
								{/if}
								<span class="text-sm text-foreground/80">{value}</span>
								<span class="text-foreground/80 text-xs hidden sm:block">{label}</span>

							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>{tooltipLabel}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</li>
				{/each}
			</ul>
		{/if}
	</section>
	<section class="py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">Repo</h2>
		{#if repo}
			<div class="flex items gap-2 items-center py-2">
				<CalendarIcon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{repo.createdAt}</span>
			</div>
			<a href={repo.url} target="_blank" class="flex items gap-2 items-center py-2 cursor-pointer">
				<LinkIcon class="w-3.5 h-3.5 text-foreground/50 flex-shrink-0" />
				<span class="text-sm text-foreground/80 hover:underline text-ellipsis overflow-hidden"
					>{repo.ownerLogin}/{repo.repoName}</span
				>
			</a>
		{/if}
	</section>
	<section class="py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">Owner</h2>
		{#if owner}
			<div class="block mb-2">
				<a
					href={owner.url}
					target="_blank"
					class="flex items gap-2 items-center py-2 cursor-pointer"
				>
					<img class="w-4 h-4" src={owner.avatarUrl} alt="" />
					<span class="text-sm text-foreground/80 text-ellipsis overflow-hidden"
						>{owner.name || owner.login}</span
					>
				</a>
			</div>
			<div class="flex gap-4 pl-[0.075rem]">
				{#if owner.email}
					<a target="_blank" href={`mailto:${owner.email}`}>
						<MailIcon class="w-3.5 h-3.5 text-foreground/50" />
					</a>
				{/if}
				{#if owner.websiteUrl}
					<a target="_blank" href={owner.websiteUrl}>
						<LinkIcon class="w-3.5 h-3.5 text-foreground/50" />
					</a>
				{/if}
				{#if owner.twitterUsername}
					<a target="_blank" href={`https://twitter.com/${owner.twitterUsername}`}>
						<TwitterIcon class="w-3.5 h-3.5 text-foreground/50" />
					</a>
				{/if}
				{#if owner.linkedinUrl}
					<a target="_blank" href={owner.linkedinUrl}>
						<LinkedinIcon class="w-3.5 h-3.5 text-foreground/50" />
					</a>
				{/if}
			</div>
		{/if}
	</section>
	{#if discordInvites && discordInvites.length > 0}
		<section class="py-4 px-6 border-b">
			<h2 class="text-foreground/50 text-sm leading-loose">Discord Invites</h2>
			<ul>
				{#each discordInvites as discordInvite}
					<li>
						<a
							href={`https://discord.gg/${discordInvite.discordInviteCode}`}
							target="_blank"
							class="flex items gap-2 items-center py-2 cursor-pointer"
						>
							<span class="text-sm text-foreground/80 text-ellipsis overflow-hidden"
								>{discordInvite.guildName}</span
							>
							{#if discordInvite.approximateMemberCount}
								<span class="ml-auto text-sm text-foreground/50">{discordInvite.approximateMemberCount}</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
	{#if contributors && contributors.length > 0}
		<section class="py-4 px-6 border-b">
			<h2 class="text-foreground/50 text-sm leading-loose">Contributors</h2>

			<ul>
				{#each contributors as contributor}
					<li>
						<a
							href={`https://github.com/${contributor.login}`}
							target="_blank"
							class="flex items gap-2 items-center py-2 cursor-pointer"
						>
							<img class="w-4 h-4 rounded-full" src={contributor.avatarUrl} alt="" />
							<span class="text-sm text-foreground/80 text-ellipsis overflow-hidden"
								>{contributor.name || contributor.login}</span
							>
							<span class="ml-auto text-sm text-foreground/50">{contributor.contributions}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
	<section class="py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">Languages</h2>
		{#if languages && languages.length > 0}
			<ul>
				{#each languages as language}
					<li class="">
						<a
							href="https://github.com/topics/{language.name}"
							class="flex gap-2 items-center py-2"
						>
							<div
								class="w-3 h-3 rounded-full border-[1.5px]"
								style="background-color: {language.color}"
							></div>
							<span class="text-sm text-foreground/50 text-ellipsis overflow-hidden"
								>{language.name}</span
							>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</section>
</aside>
