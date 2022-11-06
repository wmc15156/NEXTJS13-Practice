import { use, cache } from 'react';
import Link from 'next/link';
import Post from '../Post';

async function getPostsData(): Promise<{ id: number; body: string; title: string }[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }); // Similar to `getServerSideProps`.
  // const response2 = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' }); // Similar to `getStaticProps` from Next.js 12.
  // const response3 = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } }); //Similar to `getStaticProps` with the `revalidate` option
  return response.json();
}

const PostsPage = () => {
  const posts = use(getPostsData());
  return (
    <>
      <h1>POST PAGE</h1>
      <div>
        {posts.map((p) => (
          <Post key={p.id} {...p} />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
