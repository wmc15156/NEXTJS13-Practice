import { FC } from 'react';

interface PageProps {
  params: { postId: string };
}

const PostPage: FC<PageProps> = ({ params: { postId } }) => {
  return <div>{postId}번째 글</div>;
};

export default PostPage;
