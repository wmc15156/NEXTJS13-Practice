import Link from 'next/link';

import { Roboto } from '@next/font/google';
const roboto = Roboto({
  weight: '700',
});

const Home = () => {
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
