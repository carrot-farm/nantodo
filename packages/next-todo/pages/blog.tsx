import { Button } from "@carrot-farm/mongsil-ui";
import { InferGetStaticPropsType } from "next";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Blog({ posts, time }: InferGetStaticPropsType<typeof getStaticProps>) {
  /** 재요청 */
  const handleRevalidate = () => {
    // console.log("click: ");
    fetch("/api/revalidate", {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <h1>{time}</h1>
      <p>
        <Button onClick={handleRevalidate}>revalidate</Button>
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts: Post[] = await fetch(
    "http://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  console.log("> blog: ", posts);

  return {
    props: {
      posts,
      time: new Date().toLocaleTimeString(),
    },
  };
}

export default Blog;
