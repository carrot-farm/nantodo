import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface PostProps {
  post: Post;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

/** 3. 페이지 반영 */
const PostPage: NextPage<PostProps> = ({ post }) => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <Link href={`/posts/${Number(query.id) - 1}`}>
        <button>prev</button>
      </Link>
      <Link href={`/posts/${Number(query.id) + 1}`}>
        <button>next</button>
      </Link>
      <h1>{post.title}</h1>
    </div>
  );
};

/** 2. 하나씩 랜더링 */
export const getStaticProps: GetStaticProps<PostProps, Params> = async (
  context
) => {
  const { id } = context.params!;
  const post: Post = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${id}`
  ).then((r) => r.json());
  console.log("> getStaticProps ");

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

/** 1. 랜더링할 데이터를 불러온다 */
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts: Post[] = await fetch(
    "http://jsonplaceholder.typicode.com/posts"
  ).then((r) => r.json());
  const paths = posts
    .filter((a) => a.id <= 2)
    .map((a) => ({ params: { id: a.id.toString() } }));
  console.log("> getStaticPaths ");

  return {
    paths,
    fallback: "blocking",
  };
};
export default PostPage;
