import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Meta } from '../components/Meta';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta />
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Home;
