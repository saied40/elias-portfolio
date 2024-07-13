"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    document.title = "Elias Portfolio | about me";
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active="about-me" />
      <main className="container relative mt-17">
        <div className="page-title">
          <h2>about-me</h2>
          <p>Who am i?</p>
        </div>
        <section className="flex items-center max-md:flex-col gap-40 mb-28 max-md:mt-20 relative">
          <p className="text-base/7 text-gray max-md:text-lg">
            Hello, i'm Elias! <br />
            <br />
            I'm a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div className="w-full relative before:bg-[url('/img/dots.png')] before:bg-contain before:bg-no-repeat before:absolute before:top-[10%] before:w-20 before:h-20 after:bg-[url('/img/dots-2.png')] after:bg-contain after:bg-no-repeat after:absolute after:top-1/2 after:right-0 after:w-28 after:h-14 before:animate-bounce-slow after:animate-bounce-slow">
            <img
              src="/img/about.png"
              alt=""
              className="w-full border-b border-primary"
            />
          </div>
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -right-1/4 top-[20%] animate-bounce-slow"></span>
          <img
            src="/img/dots-2.png"
            alt=""
            className="absolute max-md:hidden w-28 -left-[20%] top-[45%] animate-bounce-slow"
          />
        </section>
        <section className="flex flex-col items-start gap-12 my-28 relative">
          <h2 className="section-heading">skills</h2>
          <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <div className="card h-fit border border-gray hover:rotate-12 hover:border-primary transition-all">
              <h4 className="text-base font-semibold border-b p-2 border-gray">
                Languages
              </h4>
              <ul className="flex items-start flex-wrap gap-2 p-2">
                <li className="text-gray">TypeScript</li>
                <li className="text-gray">Lua</li>
                <li className="text-gray">Python</li>
                <li className="text-gray">JavaScript</li>
              </ul>
            </div>
            <div className="card h-fit border border-gray hover:rotate-12 hover:border-primary transition-all">
              <h4 className="text-base font-semibold border-b p-2 border-gray">
                Other
              </h4>
              <ul className="flex items-start flex-wrap gap-2 p-2">
                <li className="text-gray">HTML</li>
                <li className="text-gray">CSS</li>
                <li className="text-gray">EJS</li>
                <li className="text-gray">SCSS</li>
                <li className="text-gray">REST</li>
                <li className="text-gray">Jinja</li>
              </ul>
            </div>
            <div className="card h-fit border border-gray hover:rotate-12 hover:border-primary transition-all">
              <h4 className="text-base font-semibold border-b p-2 border-gray">
                Tools
              </h4>
              <ul className="flex items-start flex-wrap gap-2 p-2">
                <li className="text-gray">VSCode</li>
                <li className="text-gray">Neovim</li>
                <li className="text-gray">Linux</li>
                <li className="text-gray">Figma</li>
                <li className="text-gray">XFCE</li>
                <li className="text-gray">Arch</li>
                <li className="text-gray">Git</li>
                <li className="text-gray">Font Awesome</li>
                <li className="text-gray">KDE</li>
                <li className="text-gray">fish</li>
              </ul>
            </div>
            <div className="card h-fit border border-gray hover:rotate-12 hover:border-primary transition-all">
              <h4 className="text-base font-semibold border-b p-2 border-gray">
                Databases
              </h4>
              <ul className="flex items-start flex-wrap gap-2 p-2">
                <li className="text-gray">SQLite</li>
                <li className="text-gray">PostgreSQL</li>
                <li className="text-gray">MongoDB</li>
              </ul>
            </div>
            <div className="card h-fit border border-gray hover:rotate-12 hover:border-primary transition-all">
              <h4 className="text-base font-semibold border-b p-2 border-gray">
                Frameworks
              </h4>
              <ul className="flex items-start flex-wrap gap-2 p-2">
                <li className="text-gray">React</li>
                <li className="text-gray">Vue</li>
                <li className="text-gray">Disnake</li>
                <li className="text-gray">Discord.js</li>
                <li className="text-gray">Flask</li>
                <li className="text-gray">Express.js</li>
              </ul>
            </div>
          </div>
          <img
            src="/img/dots.png"
            alt=""
            className="absolute max-md:hidden w-28 -right-[21.3%] -top-[10%] animate-bounce-slow"
          />
        </section>
        <section className="flex flex-col items-start gap-12 my-28 relative">
          <h2 className="section-heading">my-fun-facts</h2>
          <div className="flex items-center justify-between gap-40 min-h-48">
            <div className="flex items-center flex-wrap gap-4">
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                I like winter more than summer
              </p>
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                I often bike with my friends
              </p>
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                I like<span className="text-white"> pizza </span>
                and<span className="text-white"> pasta </span>
              </p>
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                I was in<span className="text-white"> Egypt</span>,
                <span className="text-white"> Poland </span>and
                <span className="text-white"> Turkey </span>
              </p>
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                My favorite movie is
                <span className="text-white"> The Green Mile </span>
              </p>
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                I am still in school
              </p>
              <p className="p-2 border border-gray text-gray text-nowrap text-base">
                I don't have any siblings
              </p>
            </div>
            <div className="grid h-full w-2/5">
              <img
                src="/img/dots.png"
                alt=""
                className="w-16 h-16 animate-bounce-slow"
              />
              <img
                src="/img/logo-outline.png"
                alt=""
                className="w-28 self-end justify-self-end animate-bounce-slow"
              />
            </div>
          </div>
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -left-1/4 top-[35%] animate-bounce-slow"></span>
          <img
            src="/img/dots.png"
            alt=""
            className="absolute max-md:hidden w-28 -right-[18%] top-0 animate-bounce-slow"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
