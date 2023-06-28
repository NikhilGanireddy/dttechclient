import React from "react";
import {IoHome} from "react-icons/io5";
import {FaBell, FaBinoculars, FaTools} from "react-icons/fa";
import {MdAccountCircle} from "react-icons/md";
import {BsThreeDotsVertical} from "react-icons/bs";

const Navbar = () => {
    return <div className="flex justify-center items-center w-full p-4 shadow-xl ">
        <div className=" flex max-w-7xl justify-between items-center w-full">
            <img src={"https://deepthought.education/assets/images/logo/logo.svg"} width={300}/>
            <ul className="flex gap-2 justify-center items-center">
                <li>
                    <IoHome/>
                </li>
                <li>
                    <FaBinoculars/>
                </li>
                <li>
                    <FaTools/>
                </li>
                <li>
                    <FaBell/>
                </li>
                <li>
                    <MdAccountCircle/>
                </li>
                <li className="bg-transparent text-blue-600 p-0  ">
                    <BsThreeDotsVertical size={20}/>
                </li>
            </ul>
        </div>
    </div>;
};

export default Navbar;
