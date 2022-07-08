import { useState } from "react";
import Head from "next/head";
import Layout  from "../components/Layout";
import Hero from "../components/Hero";
import BgAnimation from "../components/BackgroundAnimation";
import About from "../components/About";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
// import Accomplishments from '../components/Accomplishments/Accomplishments';

const Home = () => {
  const [darkModeActive, setDarkModeActive] = useState(true);
  return (
    <>
      <Head>
        <title>Shivam Bhasin</title>
      </Head>
      <Layout darkMode={darkModeActive} onClick={setDarkModeActive}>
        <section id="main" className="grid items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-2">
          <Hero />
          <BgAnimation darkMode={darkModeActive} />
        </section>
        <About />
        <section id="experience">
          <Education />
          <WorkExperience />
        </section>
      </Layout>
    </>
  );
};

export default Home;
