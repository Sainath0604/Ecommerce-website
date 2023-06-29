import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { RxCross1 } from "react-icons/Rx";
import { RxHamburgerMenu } from "react-icons/Rx";
import { BiUserCircle } from "react-icons/Bi";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../Logo/logo.png";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Theme from "./Theme";

const navigation = [
  { name: "Dashboard", to: "/" },
  { name: "Shop", to: "/shop" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const basket = useSelector((state) => state.basket.items);
  return (
    <div>
      <Disclosure
        as="nav"
        className="bg-gray-800 sticky border-b border-indigo-400 "
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative h-[10vh] flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <RxCross1 className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <RxHamburgerMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <img
                        className="block  h-8 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <img
                        className="hidden  h-8 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <Searchbar />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <Theme />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link to="/checkout">
                    <button
                      type="button"
                      className="rounded-full mr-2 lg:mr-6 bg-gray-800 p-1 text-gray-400 hover:text-white "
                    >
                      <span className="sr-only">Add to cart</span>
                      <div className="flex flex-row items-center justify-center">
                        <span className="mr-1">
                          <CgShoppingCart
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </span>
                        <span>
                          {basket.length === 0 ? <span></span> : basket.length}
                        </span>
                      </div>
                    </button>
                  </Link>
                  <Link to="/signIn">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
                    >
                      <span className="sr-only">User Account</span>
                      <BiUserCircle className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.to}>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
                <div className="sm:hidden">
                  <Searchbar />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
export default Navbar;
