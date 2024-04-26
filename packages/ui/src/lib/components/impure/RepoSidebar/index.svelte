<script lang="ts">
	import { cn } from '$lib/utils';
	import UsersIcon from 'lucide-svelte/icons/users';
	import GitPullRequestArrow from 'lucide-svelte/icons/git-pull-request-arrow';
	import CircleDotIcon from 'lucide-svelte/icons/circle-dot';
	import GitForkIcon from 'lucide-svelte/icons/git-fork';
	import StarIcon from 'lucide-svelte/icons/star';
	import FolderGit2Icon from 'lucide-svelte/icons/folder-git-2';
	import LinkIcon from 'lucide-svelte/icons/link';
	import TwitterIcon from 'lucide-svelte/icons/twitter';

	type Data = {
		twitterUrl: string;
		websiteUrl: string;
		stars: number;
		contributors: number;
		issues: number;
		forks: number;
		openPullRequests: number;
		forksPerContributor: number;
		issuesPerContributor: number;
		languages: {
			name: string;
			color: string;
		}[];
	};
	type Props = {
		data: Data;
		class?: string;
	};
	let { data, ...attrs }: Props = $props();
</script>

<aside
	{...attrs}
	class={cn(
		'w-full md:w-1/4 lg:w-1/6  overflow-x-hidden overflow-y-hidden  border-l border-t truncate whitespace-nowrap',
		attrs?.class ? attrs.class : ''
	)}
>
	<section class=" py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">GitHub Stats</h2>
		<ul class="grid grid-cols-3 md:block">
			<li class="flex items py-2 gap-2 items-center">
				<StarIcon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.stars}</span>
			</li>
			<li class="flex items py-2 gap-2 items-center">
				<UsersIcon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.contributors}</span>
			</li>
			<li class="flex items py-2 gap-2 items-center">
				<GitPullRequestArrow class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.openPullRequests}</span>
			</li>
			<li class="flex items py-2 gap-2 items-center">
				<CircleDotIcon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.issues}</span>
			</li>
			<li class="flex items py-2 gap-2 items-center">
				<GitForkIcon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.forks}</span>
			</li>
			<li class="flex items py-2 gap-2 items-center">
				<FolderGit2Icon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.forksPerContributor}</span>
			</li>
			<li class="flex items py-2 gap-2 items-center">
				<FolderGit2Icon class="w-3.5 h-3.5 text-foreground/50" />
				<span class="text-sm text-foreground/80">{data.issuesPerContributor}</span>
			</li>
		</ul>
	</section>
	<section class="py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">Languages</h2>
		<ul>
			{#each data.languages as language}
				<li class="">
					<a href="https://github.com/topics/{language.name}" class="flex gap-2 items-center py-2">
						<div
							class="w-3 h-3 rounded-full border-[1.5px]"
							style="background-color: {language.color}"
						></div>
						<span class="text-sm text-foreground/50">{language.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<section class="py-4 px-6 border-b">
		<h2 class="text-foreground/50 text-sm leading-loose">Contact</h2>
		<ul>
			<li>
				<a
					href={data.websiteUrl}
					target="_blank"
					class="flex items gap-2 items-center py-2 cursor-pointer"
				>
					<LinkIcon class="w-3.5 h-3.5 text-foreground/50" />
					<span class="text-sm text-foreground/80">Website</span>
				</a>
			</li>
			<li>
				<a
					href={data.websiteUrl}
					target="_blank"
					class="flex items gap-2 items-center py-2 cursor-pointer"
				>
					<TwitterIcon class="w-3.5 h-3.5 text-foreground/50" />
					<span class="text-sm text-foreground/80">Twitter</span>
				</a>
			</li>
		</ul>
	</section>
</aside>
