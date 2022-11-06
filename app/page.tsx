'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { Roboto } from '@next/font/google';
import { use } from 'react';
const roboto = Roboto({
  weight: '700',
});
const fetcher = (url: string) => fetch(url).then((response) => response.json());

const Home = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
  console.log(data, 'data');
  console.log('rendering');
  return (
    <>
      <div>홈화면입니다......</div>
      <div className="flex mt-10 gap-10">
        <Link href="/">HOME</Link>
        <Link href="/posts">POSTS</Link>
      </div>
    </>
  );
};

export default Home;
