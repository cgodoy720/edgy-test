import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import code from "../assets/code.mp4";
export const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        <div className="max-h-96 md:h-screen">
          <img
            className="h-screen w-screen object-cover object-top"
            src={code}
            alt="video"
          />
        </div>
        <div className="flex bg-gray-100 p-10">
          <div className="mb-auto mt-auto max-w-lg">
            <h1 className="text-3xl uppercase">Edgy Gilles</h1>
            <p className="mb-5 font-semibold">Full Stack Web Developer</p>
            <p></p>
            <div className="flex justify-between gap-12">
              <Link
                target="blank"
                to="https://github.com/Gillesedgy?tab=repositories"
              >
                <button className="flex items-center justify-center gap-2 mt-6 rounded-xl bg-black py-3 px-7 text-white">
                  See my project <AiFillGithub className="" />
                </button>
              </Link>

              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:edgygilles@pursuit.org";
                  e.preventDefault();
                }}
              >
                {" "}
                <button className=" flex items-center justify-center gap-2 mt-6 rounded-xl bg-black py-3 px-7 text-white">
                  Email Me <AiOutlineMail />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    //     <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    //     <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
    //     <div className="pt-6 text-center space-y-4">
    //       <blockquote>
    //         <p className="text-lg font-medium">
    //           “Don't wish it was easier, wish you were better. Don't wish for less problems, wish for more skills. Don't wish for less challenges, wish for more wisdom. The major value in life is not what you get. The major value in life is what you become. Success is not to be pursued; it is to be attracted by the person you become.”
    //         </p>
    //       </blockquote>
    //       <figcaption className="font-medium">
    //         <div className="text-sky-500 dark:text-sky-400">
    //          Jim Rhon
    //         </div>
    //        <div>
    // <DiGithubFull/>
    //        </div>
    //         <div className="text-slate-700 dark:text-slate-500">
    //         EDGY GILLES
    //         </div>
    //       </figcaption>
    //     </div>
    //   </figure>
  );
};
