const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 10000, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            categories {
              nodes {
                name
              }
            }
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;

  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
      posts(first: 4) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(
    ({ node }) => node.slug !== slug
  );
  // If there are still 4 posts, remove the last one
  if (data.posts.edges.length > 3) data.posts.edges.pop();

  return data;
}

export async function getAboutPageContent(aboutPageSlug = "about") {
  const data = await fetchAPI(`
  query getAboutPageContent {
    pages(where: {name: "about"}) {
      nodes {
        content
      }
    }
  }
      `);
  const content = data?.pages?.nodes[0]?.content || "";
  return content;
}
