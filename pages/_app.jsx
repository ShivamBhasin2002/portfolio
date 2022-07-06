import { NextSeo } from "next-seo";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Shivam Bhasin's Portfolio"
        description="The personal portfolio website for Shivam Bhasin, full stack web and mobile developer, but most of all an avid learner."
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "",
          description:
            "The personal portfolio website for Shivam Bhasin, full stack web and mobile developer, but most of all an avid learner.",
          site_name: "Shivam Bhasin",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
