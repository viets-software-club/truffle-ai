export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico","fonts/Geist/.DS_Store","fonts/Geist/LICENSE.TXT","fonts/Geist/statics-otf/.DS_Store","fonts/Geist/statics-otf/Geist-Black.otf","fonts/Geist/statics-otf/Geist-Bold.otf","fonts/Geist/statics-otf/Geist-Light.otf","fonts/Geist/statics-otf/Geist-Medium.otf","fonts/Geist/statics-otf/Geist-Regular.otf","fonts/Geist/statics-otf/Geist-SemiBold.otf","fonts/Geist/statics-otf/Geist-Thin.otf","fonts/Geist/statics-otf/Geist-UltraBlack.otf","fonts/Geist/statics-otf/Geist-UltraLight.otf","fonts/Geist/statics-ttf/.DS_Store","fonts/Geist/statics-ttf/Geist-Black.ttf","fonts/Geist/statics-ttf/Geist-Bold.ttf","fonts/Geist/statics-ttf/Geist-Light.ttf","fonts/Geist/statics-ttf/Geist-Medium.ttf","fonts/Geist/statics-ttf/Geist-Regular.ttf","fonts/Geist/statics-ttf/Geist-SemiBold.ttf","fonts/Geist/statics-ttf/Geist-Thin.ttf","fonts/Geist/statics-ttf/Geist-UltraBlack.ttf","fonts/Geist/statics-ttf/Geist-UltraLight.ttf","fonts/Geist/statics-woff/Geist-Black.woff","fonts/Geist/statics-woff/Geist-Black.woff2","fonts/Geist/statics-woff/Geist-Bold.woff","fonts/Geist/statics-woff/Geist-Bold.woff2","fonts/Geist/statics-woff/Geist-Light.woff","fonts/Geist/statics-woff/Geist-Light.woff2","fonts/Geist/statics-woff/Geist-Medium.woff","fonts/Geist/statics-woff/Geist-Medium.woff2","fonts/Geist/statics-woff/Geist-Regular.woff","fonts/Geist/statics-woff/Geist-Regular.woff2","fonts/Geist/statics-woff/Geist-SemiBold.woff","fonts/Geist/statics-woff/Geist-SemiBold.woff2","fonts/Geist/statics-woff/Geist-Thin.woff","fonts/Geist/statics-woff/Geist-Thin.woff2","fonts/Geist/statics-woff/Geist-UltraBlack.woff","fonts/Geist/statics-woff/Geist-UltraBlack.woff2","fonts/Geist/statics-woff/Geist-UltraLight.woff","fonts/Geist/statics-woff/Geist-UltraLight.woff2","fonts/Geist/variable-ttf/.DS_Store","fonts/Geist/variable-ttf/GeistVF.ttf","fonts/Geist/variable-woff/GeistVF.woff","fonts/Geist/variable-woff/GeistVF.woff2","fonts/GeistMono-1.3.0/.DS_Store","fonts/GeistMono-1.3.0/LICENSE.TXT","fonts/GeistMono-1.3.0/statics-otf/GeistMono-Black.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-Bold.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-Light.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-Medium.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-Regular.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-SemiBold.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-Thin.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-UltraBlack.otf","fonts/GeistMono-1.3.0/statics-otf/GeistMono-UltraLight.otf","fonts/GeistMono-1.3.0/statics-ttf/.DS_Store","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-Black.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-Bold.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-Light.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-Medium.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-Regular.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-SemiBold.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-Thin.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-UltraBlack.ttf","fonts/GeistMono-1.3.0/statics-ttf/GeistMono-UltraLight.ttf","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Black.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Black.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Bold.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Bold.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Light.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Light.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Medium.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Medium.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Regular.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Regular.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-SemiBold.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-SemiBold.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Thin.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-Thin.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-UltraBlack.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-UltraBlack.woff2","fonts/GeistMono-1.3.0/statics-woff/GeistMono-UltraLight.woff","fonts/GeistMono-1.3.0/statics-woff/GeistMono-UltraLight.woff2","fonts/GeistMono-1.3.0/variable-ttf/.DS_Store","fonts/GeistMono-1.3.0/variable-ttf/GeistMonoVF.ttf","fonts/GeistMono-1.3.0/variable-woff/GeistMonoVF.woff","fonts/GeistMono-1.3.0/variable-woff/GeistMonoVF.woff2","icons/.DS_Store","icons/icon-120x120.png","icons/icon-128x128.png","icons/icon-144x144.png","icons/icon-152x152.png","icons/icon-167x167.png","icons/icon-180x180.png","icons/icon-192x192.png","icons/icon-384x384.png","icons/icon-48x48.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","manifest.json","robots.txt","sw.js"]),
	mimeTypes: {".TXT":"text/plain",".otf":"font/otf",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".json":"application/json",".txt":"text/plain",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bhe3pPZZ.js","app":"_app/immutable/entry/app.BPvFdQvW.js","imports":["_app/immutable/entry/start.Bhe3pPZZ.js","_app/immutable/chunks/entry.Cv547XyK.js","_app/immutable/chunks/index-client.BOcCzVNE.js","_app/immutable/chunks/runtime.DDOvqkjb.js","_app/immutable/chunks/index.n9NjYAoM.js","_app/immutable/chunks/utils.BQtfrS1V.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BPvFdQvW.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/runtime.DDOvqkjb.js","_app/immutable/chunks/validate.DYpzHG9p.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/validate.72FMZ39-.js","_app/immutable/chunks/svelte-component.DUIXFtPX.js","_app/immutable/chunks/index-client.BOcCzVNE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/(authenticated)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(authenticated)/bookmarks",
				pattern: /^\/bookmarks\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(authenticated)/compare/[bookmark]",
				pattern: /^\/compare\/([^/]+?)\/?$/,
				params: [{"name":"bookmark","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(public)/(legal)/legal-notice",
				pattern: /^\/legal-notice\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(public)/(legal)/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(authenticated)/repo/[owner_login]/[repo_name]",
				pattern: /^\/repo\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"owner_login","optional":false,"rest":false,"chained":false},{"name":"repo_name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(authenticated)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(public)/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(public)/signout",
				pattern: /^\/signout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(public)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(public)/(legal)/terms-of-service",
				pattern: /^\/terms-of-service\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";