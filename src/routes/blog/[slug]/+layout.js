import { error } from '@sveltejs/kit';

export const load = async ({ url, params }) => {
  const currentRoute = url.pathname;

  const post = await import(`../../../lib/posts/${params.slug}.md`);
  const { title, date, update, summary, tags, readingTime } = post.metadata;

  // Fix this
  if (!post) {
    error(404, {
      message: 'Not found'
    });
  }

  return {
    currentRoute,
    title,
    date,
    update,
    summary,
    tags,
    readingTime,
  };
};

