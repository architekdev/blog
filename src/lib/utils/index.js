export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/lib/posts/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(15, -3);
      const fullPath = `/blog/${postPath}`;

      return {
        meta: metadata,
        path: fullPath,
      };
    })
  );

  return allPosts;
};
