import { getPostsForHashtag } from '../scraping/twitterScraping'

void getPostsForHashtag('#startup').then((r) => console.log(r))
