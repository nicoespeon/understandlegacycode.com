import type { MarkdownInstance } from "astro"

type BlogPost = MarkdownInstance<{
  date: string
  title: string
  description?: string
  tags?: string[]
  image?: string
}>

export async function getAllBlogPosts() {
  const fetchPostByPath = import.meta.glob<BlogPost>("../../content/blog/**/index.md")

  const allPosts = await Promise.all(
    Object.entries(fetchPostByPath).map(async ([path, fetchPost]) => {
      const post = await fetchPost()
      return { ...post, file: path }
    })
  )

  // Newest first
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )

  return sortedPosts.map((post) => ({
    title: post.frontmatter.title || "Untitled",
    slug: getSlugFromFile(post.file),
    description: post.frontmatter.description || post.compiledContent(),
    tags: post.frontmatter.tags ?? [],
    image: post.frontmatter.image || "/assets/legacy-code-everywhere.jpg",
    Content: post.Content,
  }))
}

function getSlugFromFile(filePath: string): string {
  const pathParts = filePath.split("/")
  // Get the directory name
  return pathParts[pathParts.length - 2]
}
