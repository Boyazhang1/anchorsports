import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../public/images/logo.png';
import menu from '../public/images/menu.svg';
import Sidebar from '../components/Sidebar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [displayMore, setDisplayMore] = useState(false);
  const [mouseOnDropdown, setMouseOnDropdown] = useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log('clicked button');
  };

  return (
    <>
      <header className="text-slate-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between items-center mt-1 box-content ">
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="Anchor Sports"
                width={200}
                height={50}
                className="justify-self-start mr-autp"
              />
            </a>
          </Link>
          <nav className="pr-6">
            <div className="hidden md:flex items-center text-base justify-center md:ml-auto">
              <Link href="/">
                <a className="md:mr-6 lg:mr-10 hover:text-gray-900 hover:underline ">
                  Home
                </a>
              </Link>
              <Link href="/programs">
                <a className="md:mr-6 lg:mr-10 hover:text-gray-900 hover:underline">
                  Programs + registration
                </a>
              </Link>
              <Link href="/about">
                <a className="md:mr-6 lg:mr-10  hover:text-gray-900 hover:underline">
                  About us
                </a>
              </Link>
              <Link href="/contact">
                <a className="md:mr-6 lg:mr-10  hover:text-gray-900 hover:underline">
                  Contact us
                </a>
              </Link>
              <div
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!mouseOnDropdown) {
                      setDisplayMore(false);
                    }
                  }, 1500);
                }}
              >
                <a
                  onMouseEnter={() => setDisplayMore(true)}
                  className="md:mr-6 lg:mr-10 hover:text-gray-900 hover:underline"
                >
                  More
                </a>
                {displayMore && (
                  <ul
                    className="absolute mt-9 border-slate-100 border bg-white z-10 block min-w-[150px] box-border"
                    onMouseEnter={() => setMouseOnDropdown(true)}
                    onMouseLeave={() => {
                      setDisplayMore(false);
                      setMouseOnDropdown(false);
                    }}
                  >
                    <li className="mx-4  my-2">
                      <Link href="/product">
                        <a className="hover:underline">Our Product</a>
                      </Link>
                    </li>
                    <li className="mx-4  my-2">
                      <Link href="/tournament">
                        <a className="hover:underline">Tournament</a>
                      </Link>
                    </li>
                    <li className="mx-4  my-2">
                      <Link href="/meeting">
                        <a className="hover:underline">General Meeting 2021</a>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 hover:fill-slate-400 mr-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {open && <Sidebar open={open} setOpen={setOpen} />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export { Navbar };
