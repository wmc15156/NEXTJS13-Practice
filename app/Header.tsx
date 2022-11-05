import Link from 'next/link';

const Header = () => {
  return (
    <Link href="/">
      <h1 className="bg-blue-500 text-white flex justify-center mb-10">Header</h1>;
    </Link>
  );
};

export default Header;
