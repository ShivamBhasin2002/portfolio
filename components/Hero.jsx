import TypeWriterEffect from "typewriter-effect";
const Intro = () => (
  <section
    id="introText"
    className="flex flex-row justify-center items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden"
  >
    <div className="w-[80%] md:w-[100%] flex flex-col mx-auto">
      <h2 className="font-title font-[800] text-[26px] md:text-[56px] lg:text-[65px] leading-[32px] md:leading-[56px] lg:leading-[72px] w-max max-w-[100%] pt-[16px] md:pt-[40px] lg:pt-[30px] pb-[8px] md:pb-[12px] lg:pb-[16px] mb-[8px] md:mb-[12px] lg:mb-[16px]">
        Hey, <br />I am Shivam Bhasin
      </h2>
      <p className="max-w-[670px] lg:max-w-[800px] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[32px] lg:leading-[36px] text-primary dark:text-primary-dark font-[300]">
        <span className="flex gap-4">
          I am a
          <span title="my designations" className="font-title">
            {/* <TypeWriterEffect
              options={{
                strings: [
                  "Student",
                  "Full Stack Developer",
                  "Freelancer",
                  "Growth Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            /> */}
            Full Stack Developer 
          </span>
        </span>
        The purpose of this portfolio website is to quickly become familiar with
        my few projects and general information about me.
        <br />
        Have a look at my{" "}
        <a
          className="font-medium hover:underline hover:text-button-dark dark:hover:text-primary-dark text-button dark:text-button-dark cursor-pointer transition-colors"
          href="https://drive.google.com/file/d/1dT7XOOOsskl_0k6FSPp84Hk5JM31bv_c/view?usp=sharing"
          title="my resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
    </div>
  </section>
);

export default Intro;
