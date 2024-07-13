"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Elias Portfolio | projects";
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active="projects" />
      <main className="container relative mt-17">
        <div className="page-title">
          <h2>projects</h2>
          <p>List of my projects</p>
        </div>
        <section className="flex flex-col items-start gap-12 my-20 relative">
          <h2 className="section-heading">complete-apps</h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-12 w-full">
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
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
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
              </ul>
              <div className="body">
                <h3>ProtectX</h3>
                <p>Discord anti-crash bot</p>
                <div className="btns">
                  {/* <a href="#" className="primary-btn">Live &lt;~&gt;</a> */}
                  <a href="#" className="gray-btn">
                    Cached &gt;=
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div>
                <img src="/img/project-04.png" alt="" />
              </div>
              <ul className="tools">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
              <div className="body">
                <h3>Kotik Bot</h3>
                <p>Multi-functional discord bot</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Live &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <div>
                <img src="/img/project-05.png" alt="" />
              </div>
              <ul className="tools">
                <li>Vue</li>
                <li>TS</li>
                <li>Less</li>
              </ul>
              <div className="body">
                <h3>Portfolio</h3>
                <p>You&#39;re using it rn</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Github &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
          </div>
          <img
            src="/img/dots-2.png"
            alt=""
            className="absolute max-md:hidden w-28 -left-[20%] top-[20%] animate-bounce-slow"
          />
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -right-1/4 top-[10%] animate-bounce-slow"></span>
        </section>
        <section className="flex flex-col items-start gap-12 my-20 relative">
          <h2 className="section-heading">small-projects</h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-12 w-full">
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>Discord.js</li>
                <li>TS</li>
                <li>JS</li>
              </ul>
              <div className="body">
                <h3>Bot boilerplate</h3>
                <p>
                  Start creating scalable discord.js bot with typescript in
                  seconds
                </p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Github &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>VUE</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
              <div className="body">
                <h3>My blog</h3>
                <p>Front-end of my future blog website written in vue</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Github &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>Figma</li>
              </ul>
              <div className="body">
                <h3>Chess pro</h3>
                <p>
                  Figma landing page about service for viewing chess tournaments
                </p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Figma &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>Figma</li>
              </ul>
              <div className="body">
                <h3>Crash protect website</h3>
                <p>
                  Figma template for website about anti-raid, anti-crash discord
                  bot
                </p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Figma &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="body">
                <h3>CSS expirements</h3>
                <p>Collection of my different little projects in css</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Live &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>Lue</li>
                <li>NeoVim</li>
              </ul>
              <div className="body">
                <h3>Web Dev nvim config</h3>
                <p>Config for neovim perfect for web developer</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Github &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>Python</li>
                <li>Quart</li>
                <li>HTML</li>
              </ul>
              <div className="body">
                <h3>Ooku</h3>
                <p>Simple link shortener with auth</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Live &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
            <div className="project-card">
              <ul className="tools !border-t-0">
                <li>Figma</li>
              </ul>
              <div className="body">
                <h3>School website</h3>
                <p>Figma template website for my school</p>
                <div className="btns">
                  <a href="#" className="primary-btn">
                    Figma &lt;~&gt;
                  </a>
                  {/* <a href="#" className="gray-btn">Cached &gt;=</a> */}
                </div>
              </div>
            </div>
          </div>
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -left-1/4 top-0 animate-bounce-slow"></span>
          <img
            src="/img/dots.png"
            alt=""
            className="absolute max-md:hidden w-28 -right-[18%] top-[20%] animate-bounce-slow"
          />
          <img
            src="/img/dots.png"
            alt=""
            className="absolute max-md:hidden w-28 -left-[21.5%] top-[68%] animate-bounce-slow"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
