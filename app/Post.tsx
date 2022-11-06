'use client';

import Link from 'next/link';
import { FC } from 'react';

interface Props {
  title: string;
  body: string;
  id: number;
}

const Post = ({ title, body, id }: Props) => {
  return (
    <>
      <Link href={`/posts/${id}`} className="m-10" key={id}>
        <div>{title}</div>
        <div>{body}</div>
      </Link>
    </>
  );
};

export default Post;
