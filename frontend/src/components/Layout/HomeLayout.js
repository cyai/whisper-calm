import React from "react";
import HeroImg from "../../Assets/icons8-anonymous-mask-480.svg";
import { NavLink } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <div className=" flex flex-col  md:gap-0 items-center md:flex-row md:items-center md:justify-center overflow-hidden">
                <div className="pl-4 order-2 md:order-[-1]">
                    <h1 className="text-[2rem] md:text-[4rem] font-extrabold text-[#307eb6] dark:text-[#307eb6]">
                        Welcome to{" "}
                        <b className="text-slate-300">Whispering Calm</b>
                    </h1>
                    <p className="text-[1rem] text-[#aacee8] md:text-[2rem]  font-bold">
                        Share your Thoughts, Issues, Ideas, and more
                    </p>

                    <p className="text-[2rem] font-bold text-[#697883] hidden md:block">
                        Anonymously here!
                    </p>
                    {/* <p className="mt-2 text-[1rem]  md:text-[2rem] font-bold text-[#000] w-full dark:text-white">
                        Confess.Express.Anonymously
                    </p> */}
                    <NavLink to="/boards">
                        <button className="mt-4 btn py-4 px-5 bg-[#71c4ff] md:mt-12 rounded-xl hover:bg-[#318bcc] text-[#444c51] text-[1em]">
                            <b>Create Board</b>
                        </button>
                    </NavLink>
                </div>
                <div className=" img rotate-[10deg] w-max text-[#307eb6] md:mt-10 md:mb-10">
                    <img
                        alt="hero_img"
                        className="w-[20rem] md:w-full"
                        src={HeroImg}
                    />
                </div>
            </div>
        </>
    );
};

export default HomeLayout;
