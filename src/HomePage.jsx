import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import MainSection from "./MainSection.jsx";
import {DataContext} from "./DataContext.jsx";
import CardsSection from "./CardsSection.jsx";
import {FaQuestion} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";
import {BsFillCalendarRangeFill} from "react-icons/bs";

const HomePage = () => {

    const {linkData, setLinkData} = useContext(DataContext)
    return (
        <div className="relative">
            <Navbar data={linkData}/>
            <MainSection/>
            <CardsSection/>
            <div className="fixed right-[20px] top-2/3 flex flex-col gap-4">
                <div className="p-4 text-white bg-[#0029ff] rounded-full">
                    <FaQuestion size={28}/>
                </div>
                <div className="p-4 text-white bg-[#0029ff] rounded-full">
                    <FaPeopleGroup size={28}/>
                </div>
                <div className="p-4 text-white bg-[#0029ff] rounded-full">
                    <BsFillCalendarRangeFill size={28}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
