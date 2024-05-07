import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../lib/api";
import { useEffect } from "react";

export default function Post({ post, posts }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    useEffect(() => {
      window.location.href = "/404";
    }, []);
    return null;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post.title} | Vital Signs Magazine`}</title>
              <meta
                property="og:image"
                content={post.featuredImage?.node.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
            />
            <PostBody content={post.content} />
          </article>
          <div className="flex flex-col justify-start sm:grid sm:grid-cols-4 ">
            <h1 className="text-2xl font-bold font-sans">
              Share this article:
            </h1>
            <div className="flex justify-between sm:justify-start space-x-14 sm:space-x-5 text-4xl mx-auto sm:mx-0 pt-10 pb-5 sm:pt-0 sm:pb-0">
              <a
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://www.vitalsignsmag.org/posts/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--twitter] text-customRed-800 hover:text-customRed-950 active:text-customRed-500"></span>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${post.title}: https://www.vitalsignsmag.org/posts/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--whatsapp] text-customRed-800 hover:text-customRed-950 active:text-customRed-500"></span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.vitalsignsmag.org/posts/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-[mdi--facebook]  text-customRed-800 hover:text-customRed-950 active:text-customRed-500"></span>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  post.title
                )}&body=Check out this article: ${encodeURIComponent(
                  "https://www.vitalsignsmag.org/posts/" + post.slug
                )}`}
              >
                <span className="icon-[mdi--email] text-customRed-800 hover:text-customRed-950 active:text-customRed-500"></span>
              </a>
            </div>
          </div>
          <SectionSeparator />
          <div className="sm:grid sm:grid-cols-4">
            <h1 className="pb-6 sm:py-0 text-2xl">Read Next: </h1>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
          <SectionSeparator />
        </>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostAndMorePosts(params?.slug);

  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};

type Props = {
  params: { id: string };
};
