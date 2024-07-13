import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header({ active }: { active: string }) {
  const menuBtn = useRef<HTMLButtonElement>(null);
  const menubar = useRef<HTMLUListElement>(null);
  const select = useRef<HTMLSelectElement>(null);
  let selectedOption = select.current?.options[select.current.selectedIndex];

  const handleMenuOpen = () => {
    menuBtn.current?.classList.toggle("open");
    menubar.current?.style.setProperty("left", menuBtn.current?.classList.contains("open") ? "0" : "100%");
  };

  useEffect(()=> {
    handleSelectChange();
  },[]);

  const handleSelectChange = () => {
    selectedOption !== undefined && (selectedOption.style.display = "block");
    selectedOption = select.current?.options[select.current.selectedIndex];
    selectedOption !== undefined && (selectedOption.style.display = "none");
  };

  return (
    <header className="header">
      <div className="container">
        <div>
          <Link href="/" className="font-bold text-base">
            <img
              src="/img/logo.png"
              alt="logo"
              className="w-4 h-4 inline-block"
            /> Elias</Link>
        </div>
        <div className="menu-cont">
          <button role="button" ref={menuBtn} className="menu-btn" onClick={handleMenuOpen}>
            <span></span>
            <span></span>
          </button>
          <ul ref={menubar} className="menubar">
            <li className="">
              <Link
                href="/"
                className={"nav-link " + (active == "home" ? "active" : "")}
              >
                home
              </Link>
            </li>
            <li className="">
              <Link
                href="/projects"
                className={"nav-link " + (active == "projects" ? "active" : "")}
              >
                work
              </Link>
            </li>
            <li className="">
              <Link
                href="/about-me"
                className={"nav-link " + (active == "about-me" ? "active" : "")}
              >
                about-me
              </Link>
            </li>
            <li className="">
              <Link
                href="/contact"
                className={"nav-link " + (active == "contact" ? "active" : "")}
              >
                contact
              </Link>
            </li>
            <li>
              <select ref={select} onChange={handleSelectChange} className="bg-transparent text-gray font-semibold border-0 outline-0">
                <option value="en" className="bg-body m-2 p-2">
                  EN
                </option>
                <option value="ru" className="bg-body m-2 p-2">
                  RU
                </option>
                <option value="ua" className="bg-body m-2 p-2">
                  UA
                </option>
              </select>
            </li>
            <div className="md:fixed top-0 left-[2%] text-center max-md:w-full md:animate-bounce-slower">
              <span className="inline-block w-px h-48 bg-gray max-md:hidden"></span>
              <div className="flex md:flex-col items-center max-md:justify-center gap-2 max-md:w-full max-md:mt-24">
                <a href="https://github.com/" target="_blank" className="">
                  <img
                    src="/img/github.png"
                    alt="Github"
                    className="w-16 md:w-8"
                  />
                </a>
                <a href="https://dribbble.com/" target="_blank" className="">
                  <img
                    src="/img/dribble.png"
                    alt="Dribble"
                    className="w-16 md:w-8"
                  />
                </a>
                <a href="https://www.figma.com/" target="_blank" className="">
                  <img
                    src="/img/figma.png"
                    alt="Figma"
                    className="w-16 md:w-8"
                  />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
