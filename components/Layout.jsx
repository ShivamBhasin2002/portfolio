import { motion } from "framer-motion";

import Header from './Header';
import ScrollToTop from "./ScrollToTop";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1280px] w-full m-auto">
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 0.8 }}
      >
        {children}
      </motion.main>
      <ScrollToTop/>
    </div>
  );
};

export default Layout;
