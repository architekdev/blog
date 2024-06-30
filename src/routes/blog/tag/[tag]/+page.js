export const load = async ({ fetch, params }) => {
  const { tag } = params;
  const res = await fetch(`/api/posts`);
  const allPosts = await res.json();

  const posts = allPosts.filter((post) => post.meta.tags.includes(tag));

  return {
    tag,
    posts
  };
};
