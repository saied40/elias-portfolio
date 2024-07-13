import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray">
      <div className="container flex items-center justify-between gap-8">
        <div className="flex flex-col items-start justify-between gap-4">
          <div className="flex items-start gap-6">
            <Link href="/" className="font-bold text-base"><img src="/img/logo.png" alt="logo" className="w-4 h-4 inline-block" />{" "}
              Elias</Link>
            <p>elias@elias-dev.ml</p>
          </div>
          <p className="text-base">Web designer and front-end developer</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-2xl font-medium">Media</p>
          <ul className="flex items-center gap-2">
            <li className=""><a href="https://github.com/" target="_blank" className=""><img src="/img/github.png" alt="" className="max-w-8" /></a></li>
            <li className=""><a href="https://www.figma.com/" target="_blank" className=""><img src="/img/figma.png" alt="" className="max-w-8" /></a></li>
            <li className=""><a href="https://discord.com/" target="_blank" className=""><img src="/img/discord.png" alt="" className="max-w-8" /></a></li>
          </ul>
        </div>
      </div>
      <p className="text-base text-gray text-center mt-12">&copy; Copyright 2022. Made by Elias</p>
    </footer>
  );
};
