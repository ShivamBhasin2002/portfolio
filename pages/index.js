import Head from "next/head";
import Layout  from "../components/Layout";
import Hero from "../components/Hero";
import BgAnimation from "../components/BackgroundAnimation";
import About from "../components/About";
// import Accomplishments from '../components/Accomplishments/Accomplishments';
// import Projects from "../components/Projects/Projects";
// import Technologies from "../components/Technologies/Technologies";

const Home = () => {
  return (
    <>
      <Head>
        <title>Shivam Bhasin</title>
      </Head>
      <Layout>
        <section className="grid items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-2">
          <Hero />
          <BgAnimation />
        </section>
        <About />
        {/* <Projects />
        <Technologies /> */}
      </Layout>
    </>
  );
};

export default Home;
