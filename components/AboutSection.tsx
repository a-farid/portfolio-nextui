import Image from "next/image";
import Skills from "./Skills";

const AboutSection = () => {
  return (
    <section className="md:grid md:grid-cols-2 md:justify-start gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
      <div className="flex justify-start items-start my-4 h-full">
        <div>
          <h2 className="font-bold text-3xl mb-4 lg:text-5xl text-center md:text-left">
            About me
          </h2>
          <p className="text-justify text-base lg:text-lg">
            "I am an experienced web developer with a strong proficiency in
            Next.js, React.js, Express.js, Flask, and Python. Over the past two
            years, I have honed my skills in crafting dynamic and efficient web
            solutions using these technologies. Additionally, I bring a decade
            of expertise in data analysis, having worked extensively with Excel
            and MS Access to derive meaningful insights. My passion for
            innovation and continuous learning drives me to explore new
            methodologies and tools, empowering me to create impactful
            solutions. I am excited about the opportunities ahead to further
            enhance my abilities and contribute to meaningful projects. Thank
            you for considering my profile."
          </p>
          <Skills />
        </div>
      </div>
      <div className="h-full md:pt-14">
        <Image
          src="/images/about-img.png"
          alt="About"
          width={500}
          height={500}
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;
