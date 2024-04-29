import Root from './section.svelte';
import Content from './SectionContent.svelte';
import Description from './SectionDescription.svelte';
import Footer from './SectionFooter.svelte';
import Header from './SectionHeader.svelte';
import Title from './SectionTitle.svelte';

export {
	Root,
	Content,
	Description,
	Footer,
	Header,
	Title,
	//
	Root as Card,
	Content as CardContent,
	Description as CardDescription,
	Footer as CardFooter,
	Header as CardHeader,
	Title as CardTitle
};

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
