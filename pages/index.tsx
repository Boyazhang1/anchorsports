import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Content } from '../components/Content';
import { Hero } from '../components/Hero';
import { Meta } from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta />
      <Hero/>
      <Content/>
    </div>
  );
};

export default Home;
