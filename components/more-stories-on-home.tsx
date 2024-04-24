import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  const limitedPosts = posts.slice(0, 4);

  return (
    <section>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-5 gap-y-">
        {limitedPosts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            slug={node.slug}
            excerpt={node.excerpt}
            category={node.categories.nodes.map(
              (category) => category.name
            )}
          />
        ))}
      </div>
    </section>
  );
}
