export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/(authenticated)": [4,[2]],
		"/(authenticated)/bookmarks": [5,[2]],
		"/(authenticated)/compare/[bookmark]": [6,[2]],
		"/(public)/(legal)/legal-notice": [9,[3]],
		"/(public)/(legal)/privacy-policy": [10,[3]],
		"/(authenticated)/repo/[owner_login]/[repo_name]": [7,[2]],
		"/(authenticated)/settings": [8,[2]],
		"/(public)/signin": [12],
		"/(public)/signout": [13],
		"/(public)/signup": [14],
		"/(public)/(legal)/terms-of-service": [11,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';