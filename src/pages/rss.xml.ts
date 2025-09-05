import rss from "@astrojs/rss"
import { getAllBlogPosts } from "@lib/blog"
import type { APIContext } from "astro"

export async function GET(context: APIContext) {
  const posts = await getAllBlogPosts()

  return rss({
    title: "Understand Legacy Code",
    description: "Change Messy Software Without Breaking It",
    site: context.site ?? "https://understandlegacycode.com",
    items: await Promise.all(
      posts.map(async (post) => ({
        title: post.title,
        pubDate: new Date(post.date),
        description: await post.description,
        link: `/blog/${post.slug}/`,
        content: await post.description,
        guid: `https://understandlegacycode.com/blog/${post.slug}`,
      }))
    ),
    customData: `<language>en-us</language>`,
  })
}
