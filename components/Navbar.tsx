import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import menu from '../public/images/menu.svg';
const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
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
          <nav>
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
              <Link href="/about">
                <a className="md:mr-6 lg:mr-10  hover:text-gray-900 hover:underline">
                  Contact us
                </a>
              </Link>
              <Link href="/">
                <a className="md:mr-6 lg:mr-10 hover:text-gray-900 hover:underline">
                  More
                </a>
              </Link>
            </div>
            <div className="md:hidden">
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
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export { Navbar };
