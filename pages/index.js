import Head from "next/head";
import Layout  from "../components/Layout";
// import Accomplishments from '../components/Accomplishments/Accomplishments';
// import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
// import Hero from "../components/Hero/Hero";
// import Projects from "../components/Projects/Projects";
// import Technologies from "../components/Technologies/Technologies";
// import Timeline from "../components/TimeLine/TimeLine";

const Home = () => {
  return (
    <>
      <Head>
        <title>Shivam Bhasin</title>
      </Head>
      <Layout>
        {/* <Section grid center>
          <Hero />
          <BgAnimation />
        </Section>
        <Timeline />
        <Projects />
        <Technologies /> */}
      </Layout>
    </>
  );
};

export default Home;
