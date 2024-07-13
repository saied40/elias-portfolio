"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Elias Portfolio";
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active="home" />
      <main className="container relative mt-17">
        <section className="flex items-center max-md:flex-col gap-8 py-24">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-3xl font-semibold text-wrap mb-2">
              Elias is a{" "}
              <span className="text-primary text-nowrap">web designer</span> and{" "}
              <span className="text-primary text-nowrap">
                front-end developer
              </span>
            </h1>
            <p className="text-base text-gray text-wrap">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Link href="/contact" className="primary-btn">
              Contact me!!
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-[45%]">
            <div className="relative max-[400px]:w-[150%]">
              <img
                src="/img/logo-outline.png"
                alt="logo outlined"
                className="absolute left-0 top-[20%] w-[35%] -z-10 animate-show-ltr"
              />
              <img src="/img/hero.png" alt="hero" className="w-full" />
              <img
                src="/img/dots.png"
                alt="dots"
                className="absolute right-0 top-[65%] w-[17.8%] animate-show-rtl"
              />
            </div>
            <p className="text-base font-medium text-gray border border-gray w-full p-2 flex items-center max-2xl:w-[130%] max-[400px]:w-[150%] max-xl:flex-wrap before:inline-block before:w-4 before:h-4 before:bg-primary before:mr-2">
              Currently working on{" "}
              <span className="font-semibold text-white ml-2">Portfolio</span>
            </p>
          </div>
        </section>
        <div className="flex flex-col items-end w-fit mx-auto relative">
          <q className="inline-block text-center w-fit text-2xl max-xl:text-xl font-medium p-8 max-sm:px-0 border border-gray before:bg-[url('/img/open-quote.png')] before:bg-contain before:bg-no-repeat before:w-10 before:h-7 relative before:absolute before:left-2 before:-top-4 after:bg-[url('/img/close-quote.png')] after:absolute after:bg-contain after:bg-no-repeat after:w-10 after:h-7 after:right-2 after:-bottom-4">
            With great power comes great electricity bill
          </q>
          <span className="inline-block text-2xl max-xl:text-xl border border-gray border-t-0 p-4 w-fit">
            - Dr. Who
          </span>
          <span className="w-24 h-24 border border-gray inline-block max-md:hidden absolute -right-[64%] top-0 animate-bounce-slow"></span>
        </div>
        <section className="flex flex-col items-center gap-12 my-20 relative">
          <div className="flex items-center justify-between w-full">
            <h2 className="section-heading after max-sm:after:w-2/5">
              projects
            </h2>
            <Link
              href="/projects"
              className="cursor-pointer hover:text-primary transition-all"
            >
              View all ~~&gt;
            </Link>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
            <div className="project-card">
              <div>
                <img src="/img/project-01.png" alt="" />
              </div>
              <ul className="tools">
                <li>HTML</li>
                <li>SCSS</li>
                <li>Python</li>
                <li>Flask</li>
              </ul>
              <div className="body">
                <h3>ChertNodes</h3>
                <p>Minecraft servers hosting</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Live &lt;~&gt;
                  </a>
                  <a href="#" className="gray-btn">
                    Cached &gt;=
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div>
                <img src="/img/project-02.png" alt="" />
              </div>
              <ul className="tools">
                <li>React</li>
                <li>Express</li>
                <li>Discord.js</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>SCSS</li>
                <li>Python</li>
                <li>Flask</li>
              </ul>
              <div className="body">
                <h3>ProtectX</h3>
                <p>Discord anti-crash bot</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Live &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &lt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <div>
                <img src="/img/project-03.png" alt="" />
              </div>
              <ul className="tools">
                <li>CSS</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
              <div className="body">
                <h3>Kahoot Answers Viewer</h3>
                <p>Get answers to your kahoot quiz</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Live &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &lt;=</a> */}
                </div>
              </div>
            </div>
          </div>
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -right-1/4 top-1/2 animate-bounce-slow"></span>
        </section>
        <section className="flex flex-col items-center my-28">
          <div className="flex items-center justify-between w-full">
            <h2 className="section-heading after">skills</h2>
          </div>
          <div className="flex gap-6 w-full">
            <div className="relative w-2/5 m-8 max-lg:hidden">
              <img
                src="/img/dots.png"
                alt=""
                className="w-16 h-16 absolute left-0 top-8 animate-bounce-slow"
              />
              <div className="w-20 h-20 border border-gray absolute top-0 right-8 animate-bounce-slow"></div>
              <img
                src="/img/logo-outline.png"
                alt=""
                className="w-28 absolute left-4 bottom-0 animate-bounce-slow"
              />
              <img
                src="/img/dots.png"
                alt=""
                className="w-16 absolute left-1/2 bottom-1/4 animate-bounce-slow"
              />
              <div className="w-14 h-14 border border-gray absolute right-0 bottom-12 animate-bounce-slow"></div>
            </div>
            <div className="flex max-md:flex-col-reverse gap-4 w-3/5 mt-12 max-lg:w-full">
              <div className="flex flex-col items-start gap-4 w-1/3 max-md:w-full">
                <div className="card w-full max-md:w-[calc(50%_-_.5rem)] max-md:self-end border border-gray hover:rotate-12 hover:border-primary transition-all">
                  <h4 className="text-base font-semibold border-b p-2 border-gray">
                    Languages
                  </h4>
                  <ul className="flex items-start flex-wrap gap-2 p-2">
                    <li>TypeScript</li>
                    <li>Lua</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-col items-start gap-4 w-1/3 max-md:w-full">
                <div className="card w-full border border-gray hover:rotate-12 hover:border-primary transition-all">
                  <h4 className="text-base font-semibold border-b p-2 border-gray">
                    Databases
                  </h4>
                  <ul className="flex items-start flex-wrap gap-2 p-2">
                    <li>SQLite</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="card w-full border border-gray hover:rotate-12 hover:border-primary transition-all">
                  <h4 className="text-base font-semibold border-b p-2 border-gray">
                    Other
                  </h4>
                  <ul className="flex items-start flex-wrap gap-2 p-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>EJS</li>
                    <li>SCSS</li>
                    <li>REST</li>
                    <li>Jinja</li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-col items-start gap-4 w-1/3 max-md:w-full">
                <div className="card w-full border border-gray hover:rotate-12 hover:border-primary transition-all">
                  <h4 className="text-base font-semibold border-b p-2 border-gray">
                    Tools
                  </h4>
                  <ul className="flex items-start flex-wrap gap-2 p-2">
                    <li>VSCode</li>
                    <li>Neovim</li>
                    <li>Linux</li>
                    <li>Figma</li>
                    <li>XFCE</li>
                    <li>Arch</li>
                    <li>Git</li>
                    <li>Font Awesome</li>
                  </ul>
                </div>
                <div className="card w-full border border-gray hover:rotate-12 hover:border-primary transition-all">
                  <h4 className="text-base font-semibold border-b p-2 border-gray">
                    Frameworks
                  </h4>
                  <ul className="flex items-start flex-wrap gap-2 p-2">
                    <li>React</li>
                    <li>Vue</li>
                    <li>Disnake</li>
                    <li>Discord.js</li>
                    <li>Flask</li>
                    <li>Express.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center max-md:flex-col gap-40 my-28 relative">
          <div className="flex flex-col items-start gap-8 w-full">
            <h2 className="section-heading after">about-me</h2>
            <p className="text-base/7 text-gray">
              Hello, i'm Elias! <br />
              <br /> I'm a self-taught front-end developer based in Kyiv,
              Ukraine. I can develop responsive websites from scratch and raise
              them into modern user-friendly web experiences. <br />
              <br /> Transforming my creativity and knowledge into a websites
              has been my passion for over a year. I have been helping various
              clients to establish their presence online. I always strive to
              learn about the newest technologies and frameworks.
            </p>
            <Link href="/about-me" className="primary-btn">
              Read more -&gt;
            </Link>
          </div>
          <div className="w-6/12 relative before:bg-[url('/img/dots.png')] before:bg-contain before:bg-no-repeat before:absolute before:top-[10%] before:w-20 before:h-20 after:bg-[url('/img/dots-2.png')] after:bg-contain after:bg-no-repeat after:absolute after:top-1/2 after:right-0 after:w-28 after:h-14 before:animate-bounce-slow after:animate-bounce-slow">
            <img
              src="/img/about.png"
              alt=""
              className="w-full border-b border-primary"
            />
          </div>
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -left-1/4 top-[37%] animate-bounce-slow"></span>
          <img
            src="/img/dots.png"
            alt=""
            className="absolute max-md:hidden w-28 -right-[18%] top-[58%] animate-bounce-slow"
          />
        </section>
        <section className="flex flex-col items-start gap-12 my-32 relative">
          <div className="flex items-start">
            <h2 className="section-heading after">contact</h2>
          </div>
          <div className="flex items-center justify-between max-md:flex-col gap-8 w-full">
            <p className="text-base font-medium text-gray self-start">
              I'm interested in freelance opportunities. However, <br />
              if you have other request or question, don't <br /> hesitate to
              contact me
            </p>
            <div className="flex flex-col items-start gap-4 p-4 border border-gray self-end">
              <h4 className="text-base font-semibold">Message me here</h4>
              <div className="flex flex-col items-start gap-2">
                <p className="text-base text-gray flex items-center gap-4">
                  <img src="/img/discord.png" alt="" className="w-8 h-8" />
                  !Elias#3519
                </p>
                <p className="text-base text-gray flex items-center gap-4">
                  <img src="/img/email.png" alt="" className="w-8 h-8" />
                  elias@elias.me
                </p>
              </div>
            </div>
          </div>
          <img
            src="/img/dots.png"
            alt=""
            className="absolute max-md:hidden w-28 -left-[21%] top-[45%] animate-bounce-slow"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
