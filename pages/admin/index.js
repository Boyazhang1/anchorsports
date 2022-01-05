import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
export default function LoginRedirect() {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            {!user ? (
              <>
                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                  Access admin portal
                </h1>
                <a
                  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  href="/api/auth/login"
                >
                  Login
                </a>
              </>
            ) : (
              <>
                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                  Log out of admin portal
                </h1>
                <a
                  className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                  href="/api/auth/logout"
                >
                  Logout
                </a>
              </>
            )}
          </div>
        </div>
        {user && (
          <div>
            <Link href="/admin/dashboard">
              <a className=" mx-auto block w-[10%] text-white  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0 text-center">
                Go to Dashboard
              </a>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
