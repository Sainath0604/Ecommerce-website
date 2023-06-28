import { BsTwitter } from "react-icons/Bs";
import { BsFacebook } from "react-icons/Bs";
import { BsInstagram } from "react-icons/Bs";
import { BsGithub } from "react-icons/Bs";
import { FcReddit } from "react-icons/Fc";
import { BsYoutube } from "react-icons/Bs";

function Footer() {
  return (
    <div className="relative bottom-0 w-full ">
      <div className="h-[10vh] w-full py-5 bg-gray-800 text-white border-t border-indigo-400 ">
        <div className="flex justify-center ">
          <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:justify-between w-[70vw] items-center">
            <div className="text-sm text-gray-300">
              &#169; 2023 Ecomm, Inc. All rights reserved.
            </div>
            <div>
              <ul className="flex flex-row gap-4 text-gray-300 text-xl ">
                <li className="hover:text-white p-2">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li className="hover:text-white p-2">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li className="hover:text-white p-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className="hover:text-white p-2">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li className="hover:text-white p-2">
                  <a
                    href="https://www.reddit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FcReddit />
                  </a>
                </li>
                <li className="hover:text-white p-2">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
