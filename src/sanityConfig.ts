import { useSanityClient } from 'astro-sanity';
import { portableTextToHtml } from 'astro-sanity';
/*== == == == ==>get post<== == == == == */
export async function getOpportunities() {
    try {
      let query = `*[_type == 'opportunities']{...,tags[]->{
        tag
       }}`;
      let data = await useSanityClient().fetch(query);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch blog posts');
    }
}

export function sanityPortableText(portabletext: any) {
    return portableTextToHtml(portabletext);
}