/* eslint-disable react-refresh/only-export-components */
import { Paragraph } from "../ui/paragraph.jsx";
import { Title } from "../ui/title.jsx";
import { Parallax } from "../ui/parallax.jsx";
import LinkedIn from "../ui/linkedin.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import transition from "../ui/transition.jsx";
import data from "../../../data/entries.json";

function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between">
        <div className="space-y-10">
          <Title
            value="Hi, I'm Nathan*"
            className="text-8xl sm:text-[10rem] max-w-xl overflow-hidden font-primary leading-[0.9]"
          />

          <a
            href="https://discord.gg/dP9h7WVuG4"
            className="px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-indigo-600 hover:text-white relative z-10 bg-white"
          >
            <img src="me1.jpg" className="size-8 rounded-full" />
            Discord
            <span className="bg-green-500 size-3 relative">
              <span className="absolute bg-green-500 animate-ping size-3" />
            </span>
          </a>
        </div>
        <Parallax outputRange={["2rem", "4rem"]} className="relative h-fit">
          <LinkedIn />
        </Parallax>
      </section>
      <section className="flex flex-col md:flex-row gap-16">
        <Paragraph
          className="text-5xl md:text-7xl flex flex-wrap leading-[1] font-medium"
          value="I develop a scalable and modern web app from your ideas."
        />
        <Parallax outputRange={["0rem", "2rem"]}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="font-mono uppercase text-sm"
          >
            Come from a background of Marketing, Creative, AI and Software
            Engineering.
          </motion.p>
        </Parallax>
      </section>
      <div className="sm:space-y-24">
        {data.map(({ home }, i) => (
          <Parallax
            key={i}
            outputRange={[`${[1, 2].includes(i) ? i * 4 : i}rem`, `${i}rem`]}
            className={`w-full md:w-1/2 group relative sm:aspect-video aspect-[4/3] overflow-hidden ${
              i % 2 == 0 ? "float-right" : ""
            }`}
          >
            <a href={home.path}>
              <img
                src={home.thumbnail.path}
                className="duration-200 ease-in-out sm:aspect-video aspect-[4/3] object-cover object-top group-hover:brightness-50"
              />
              <img
                src={home.thumbnail.logo.path}
                className={`duration-200 ease-in-out opacity-0 group-hover:opacity-100 ${home.thumbnail.logo.width} aspect-square top-1/2 left-1/2 -translate-1/2 absolute`}
              />
            </a>
          </Parallax>
        ))}
      </div>
      <section>
        <span className="font-mono uppercase text-sm">Get in touch</span>
        <Paragraph
          className="my-6 text-6xl md:text-7xl flex flex-wrap leading-[1] font-medium"
          value="Let's work together!"
          offset={["start 0.9", "start 0.5"]}
        />
        <a
          href="https://wa.me/6587470061"
          className="px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-green-600 hover:text-white bg-white"
        >
          <img src="me1.jpg" className="size-8 rounded-full" />
          WhatsApp
          <span className="bg-green-500 size-3 relative">
            <span className="absolute bg-green-500 animate-ping size-3" />
          </span>
        </a>
      </section>
    </>
  );
}

export default transition(Home, "Hello World 🚀");
