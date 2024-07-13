"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Elias Portfolio | contact";
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active="contact" />
      <main className="container relative mt-17 mb-28">
        <div className="page-title">
          <h2>contact</h2>
          <p>Who am i?</p>
        </div>
        <section className="flex items-start justify-between max-md:flex-col gap-28 my-12 max-md:mb-32 relative">
          <p className="text-base font-medium text-gray">
            I'm interested in freelance opportunities. However,
            <br />
            if you have other request or question,
            <br />
            don't hesitate to contact me
          </p>
          <div className="flex items-start gap-3 max-md:self-end">
            <div className="flex flex-col gap-2 p-4 border border-gray">
              <p className="font-medium text-base">Support me here</p>
              <p className="text-base text-gray">4149500120690030</p>
            </div>
            <div className="flex flex-col gap-4 p-4 border border-gray">
              <p className="font-semibold text-base">Message me here</p>
              <div className="flex flex-col items-start gap-2">
                <p className="text-base text-gray text-nowrap flex items-center gap-1">
                  <img src="./img/discord.png" alt="" className="w-8" />{" "}
                  Elias#1234
                </p>
                <p className="text-base text-gray text-nowrap flex items-center gap-1">
                  <img src="./img/email.png" alt="" className="w-8" />{" "}
                  elias@elias-dev.ml
                </p>
              </div>
            </div>
          </div>
          <span className="w-40 h-40 border border-gray inline-block max-md:hidden absolute -right-1/4 top-[35%] animate-bounce-slow"></span>
        </section>
        <section className="flex flex-col items-start gap-6 relative">
          <h2 className="section-heading">all-media</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 text-base text-gray">
              <img src="/img/twitter.png" alt="" className="w-8" /> @elias
            </a>
            <a href="#" className="flex items-center gap-1 text-base text-gray">
              <img src="/img/twitter.png" alt="" className="w-8" /> @elias
            </a>
          </div>
          <img
            src="/img/dots-2.png"
            alt=""
            className="absolute max-md:hidden w-28 -left-[20%] top-0 animate-bounce-slow"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
