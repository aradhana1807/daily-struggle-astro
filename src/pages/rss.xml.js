import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const chapters = await getCollection('chapters');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: chapters.map((chapter) => ({
			...chapter.data,
			link: `/chapters/${chapter.slug}/`,
		})),
	});
}
