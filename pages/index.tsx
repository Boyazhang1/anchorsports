import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Meta } from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta />
      <h1 className="text-3xl font-bold underline ">Testing</h1>
    </div>
  );
};

export default Home;
