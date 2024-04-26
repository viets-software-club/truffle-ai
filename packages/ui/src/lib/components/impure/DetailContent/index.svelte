<script lang="ts">
	import HnSentiment from '$lib/components/impure/HnSentiment/index.svelte';
	import Notes from '$lib/components/impure/Notes/index.svelte';
	import RepoSidebar from '$lib/components/impure/RepoSidebar/index.svelte';
	import ChartView from '$lib/components/impure/ChartView/index.svelte';

	type Props = {
		repo: string;
		owner: string;
	};
	let { repo = 'sveltejs', owner = 'svelte' }: Props = $props();

	let avatarUrl = 'https://avatars.githubusercontent.com/u/6154722?s=200&v=4';

	const data = {
		stars: 100,
		contributors: 10,
		issues: 20,
		forks: 30,
		openPullRequests: 40,
		forksPerContributor: 50,
		issuesPerContributor: 60,
		twitterUrl: 'https://twitter.com/sveltejs',
		websiteUrl: 'https://svelte.dev',
		languages: [
			{ name: 'JavaScript', color: '#f1e05a' },
			{ name: 'TypeScript', color: '#2b7489' },
			{ name: 'HTML', color: '#e34c26' },
			{ name: 'CSS', color: '#563d7c' }
		]
	};
</script>

<section class="h-[3.75rem]"></section>

<div class="md:flex md:h-[calc(100%-3.75rem)]">
	<div class="flex-1">
		<section class="border-t px-8 py-6">
			<div class="flex items-center gap-4 mb-5">
				<img class="w-8 h-8" src={avatarUrl} alt="avatar" />
				<h1 class="text-2xl font-bold">{owner}/{repo}</h1>
			</div>
			<div class="md:flex gap-10">
				<div class="mb-4 md:mb-0">
					<h2 class="text-foreground/50 text-sm leading-loose">About</h2>
					<p class="text-sm">Lorem ipsum dolor sit amet</p>
				</div>
				<div>
					<h2 class="text-foreground/50 text-sm leading-loose">Explain Like I am 5</h2>
					<p class="text-sm max-w-2xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat error
						ratione in deleniti, consequuntur sit corporis vero vitae expedita perspiciatis quidem
						temporibus placeat, aut explicabo, laborum necessitatibus aspernatur saepe!
					</p>
				</div>
			</div>
		</section>
		<section class="border-t w-full">
			<ChartView />
		</section>
		<section class="border-t md:flex md:gap-4 p-4">
			<div class="w-full md:w-1/2 mb-4 md:mb-0">
				<HnSentiment />
			</div>
			<div class="w-full md:w-1/2">
				<Notes />
			</div>
		</section>
	</div>
	<RepoSidebar {data} />
</div>
