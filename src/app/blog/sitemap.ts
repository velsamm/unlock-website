import type { MetadataRoute } from 'next';
import { posts } from '$app/blog/postsTransformer';

const ids = posts.map((post) => post.id);

export default function sitemap(): MetadataRoute.Sitemap {
  return ids.map((id) => ({
    url: `https://bzpravo.com/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}
