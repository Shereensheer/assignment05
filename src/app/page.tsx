"use client"
import Head from 'next/head';
import Header from './header/page';
import Hero from './hero/page';


const Home = () => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="My personal portfolio website" />
    </Head>
    <Header />
    <Hero />
    
  </>
);

export default Home;
