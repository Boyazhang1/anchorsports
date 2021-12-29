/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Sidebar({ open, setOpen }: Props) {
  const router = useRouter();
  const sideNavs = new Map<string, string>();
  sideNavs.set('Home', '/');
  sideNavs.set('Programs + registration', '/programs');
  sideNavs.set('About Us', '/about');
  sideNavs.set('Contact us', '/contact');
  sideNavs.set('Our Product', '/products');
  sideNavs.set('Tournament', '/tournament');
  sideNavs.set('2021 Club General Meeting', 'legal');

  const displaySideNav = (sideNavs: Map<string, string>) => {
    const sideNavsArr = Array.from(sideNavs.entries());

    function handleClick(
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      index: number,
      link: string
    ): void {
      setOpen(false);
      e.preventDefault();
      router.push(link);
    }
    console.log(open);

    return sideNavsArr.map((element, index) => {
      return (
        <li
          className="p-6 border-b-2 border-slate-700 hover:bg-slate-100"
          key={index}
        >
          <Link href={element[1]}>
            <a
// noteToSelf: useful condition classNames method
//               {...(index == 0
//                 ? {
// ,
//                   }
//                 : { className: 'hover:underline' })}
              className='hover:underline'
              onClick={(e) => handleClick(e, index, element[1])}
            >
              {element[0]}
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-300 bg-opacity-50 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl ">
                    <div className="absolute inset-0">
                      <ul className="font-semibold">
                        {displaySideNav(sideNavs)}
                      </ul>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
