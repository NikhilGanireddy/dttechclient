import {useContext} from "react";
import {DataContext} from "./DataContext.jsx";
import {BiSolidUpArrow} from "react-icons/bi";
import {BsArrowsFullscreen, BsFillChatRightTextFill, BsFillLightbulbFill, BsQuestionSquareFill} from "react-icons/bs";
import {TbPlant2} from "react-icons/tb";
import {IoLinkSharp} from "react-icons/io5";
import {AiTwotoneEdit} from "react-icons/ai";
import {HiOutlineArrowUturnLeft, HiOutlineArrowUturnRight} from "react-icons/hi2";
import {GrGallery} from "react-icons/gr";
import {HiDotsHorizontal} from "react-icons/hi";
import {FaCloudUploadAlt, FaSave} from "react-icons/fa";

const CardsSection = () => {


    const {linkData, toggleThreadA, setToggleThreadA} = useContext(DataContext)
    console.log(toggleThreadA)

    return <div className=" flex flex-col justify-center items-center pb-12">
        <div className=" max-w-7xl w-full px-4 py-6 md:px-20 gap-8 grid grid-cols-2">
            <div
                className=" flex flex-col border rounded-2xl overflow-hidden gap-4 max-h-[500px] shadow-xl overflow-y-scroll">
                <div className="bg-black text-white p-2 flex justify-center items-center">
                    <h1>{linkData?.tasks[0].assets[0].asset_title}</h1>
                </div>
                <p className="p-4">
                    <span className="text-xl font-semibold mr-2">Description:</span>
                    {linkData?.tasks[0].assets[0].asset_description}
                </p>

                <iframe className="aspect-video" src={linkData?.tasks[0].assets[0].asset_content}/>
            </div>
            <div
                className=" flex flex-col border rounded-2xl overflow-hidden gap-4 max-h-[500px] shadow-xl overflow-y-scroll">
                <div className="bg-black text-white p-2 flex justify-center items-center">
                    <h1>{linkData?.tasks[0].assets[1].asset_title}</h1>
                </div>
                <p className="p-4">
                    <span className="text-xl font-semibold mr-2">Description:</span>
                    {linkData?.tasks[0].assets[1].asset_description}
                </p>

                <div className="">
                    <div className="border p-2 cursor-pointer bg-amber-50 flex gap-6"
                         onClick={() => setToggleThreadA(!toggleThreadA)}>
                        <div
                            className={`transition-all duration-200 inline-flex justify-center items-center ${toggleThreadA ? "rotate-180 " : ""}`}>
                            <BiSolidUpArrow/>
                        </div>
                        <h1 className="text-lg font-semibold">Thread A</h1>
                    </div>
                    {toggleThreadA ? <div className="p-8 flex flex-col gap-6">

                        <div className="grid grid-cols-2 w-full items-center gap-6">
                            <div
                                className="rounded-2xl bg-neutral-200 shadow-xl overflow-hidden border-none outline-none h-[120px]">
                                <h1 className="py-2 px-4 text-sm">Sub Thread 1</h1>
                                <textarea
                                    className=" w-full py-2 px-4 h-full rounded-t-2xl shadow-none resize-none border-none outline-none"
                                    placeholder="Enter text here"/>
                            </div>

                            <div
                                className="rounded-2xl bg-neutral-200 shadow-xl overflow-hidden border-none outline-none h-[120px]">
                                <h1 className="py-2 px-4 text-sm">Sub Interpretation 1</h1>
                                <textarea
                                    className=" w-full py-2 px-4 h-full rounded-t-2xl shadow-none resize-none border-none outline-none"
                                    placeholder="Enter text here"/>
                            </div>
                        </div>

                        <div className=" grid grid-cols-2 w-full items-center gap-6">
                            <div className=" w-full gap-2 justify-end flex px-2">
                                <BsFillLightbulbFill size={24}/>
                                <BsFillChatRightTextFill size={24}/>
                                <BsQuestionSquareFill size={24}/>
                                <TbPlant2 size={24}/>
                            </div>

                            <div className=" w-full gap-4 grid grid-cols-2">
                                <select className="shadow-xl">
                                    <option>Select Category</option>
                                    <option>Remark</option>
                                    <option>Sub Argument</option>
                                    <option>Sub Explanation</option>


                                </select>
                                <select className="shadow-xl">
                                    <option>Select Process</option>
                                    <option>Remark</option>
                                    <option>Sub Argument</option>
                                    <option>Sub Explanation</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn-blue w-max"> + Sub Thread</button>

                        <div
                            className="rounded-2xl bg-neutral-200 shadow-xl overflow-hidden border-none outline-none h-[150px]">
                            <h1 className="py-2 px-4 text-sm">Summary For Thread A</h1>
                            <textarea
                                className=" w-full py-2 px-4 h-full rounded-t-2xl shadow-none resize-none border-none outline-none"
                                placeholder="Enter text here"/>
                        </div>

                        <div className=" grid grid-cols-2 w-full items-center gap-6">
                            <div className=" w-full gap-2 justify-start flex px-2">
                                <div className="flex justify-center items-center">
                                    <IoLinkSharp/>
                                </div>
                                <span className="text-sm">Thread credit</span>
                                <div className="flex justify-center items-center">
                                    <AiTwotoneEdit/>
                                </div>

                            </div>

                            <div className=" w-full flex  justify-end">

                                <select className="shadow-xl">
                                    <option>Select Process</option>
                                    <option>Remark</option>
                                    <option>Sub Argument</option>
                                    <option>Sub Explanation</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end items-center">
                            <button className="btn-blue w-max"> + New Thread</button>
                        </div>

                    </div> : ""}
                </div>
            </div>
            <div
                className=" flex flex-col border rounded-2xl overflow-hidden gap-4 max-h-[500px] shadow-xl overflow-y-scroll">
                <div className="bg-black text-white p-2 flex justify-center items-center">
                    <h1>{linkData?.tasks[0].assets[2].asset_title}</h1>
                </div>
                <p className="p-4">
                    <span className="text-xl font-semibold mr-2">Description:</span>
                    {linkData?.tasks[0].assets[2].asset_description}
                </p>

                <hr/>
                <div className="p-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2 ">
                        <label className="text-xl font-semibold">Title:</label>
                        <input type={"text"} className=" py-2 px-4 shadow-lg border rounded-lg"/>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label className="text-xl font-semibold">Title:</label>
                        <div className=" rounded-2xl border shadow-xl">
                            <div className=" flex flex-col">
                                <div className=" px-4 flex items-center gap-3 text-center py-2">
                                    <span>File</span>
                                    <span>Edit</span>
                                    <span>View</span>
                                    <span>Insert</span>
                                    <span>Format</span>
                                    <span>Tools</span>
                                    <span>Table</span>
                                    <span>Help</span>
                                </div>
                                <div className=" px-4 py-2 flex items-center gap-4 shadow-xl">
                                    <HiOutlineArrowUturnLeft className=" font-bold" size={20}/>
                                    <HiOutlineArrowUturnRight className="text-gray-400 font-bold" size={20}/>
                                    <BsArrowsFullscreen size={18}/>
                                    <GrGallery size={20}/>
                                    <div className="px-4 gap-4 flex justify-center items-center">
                                        <select className=" text-lg bg-gray-100 py-1 px-4">
                                            <option>Paragraph</option>
                                            <option>Paragraph</option>
                                            <option>Paragraph</option>
                                            <option>Paragraph</option>
                                        </select>
                                        <HiDotsHorizontal size={20}/>
                                    </div>
                                </div>
                                <hr/>
                                <textarea className="resize-y min-h-[250px] rounded-2xl overflow-hidden"/>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 gap-4">

                        <div className="flex flex-col gap-2">
                            <label className=" font-semibold text-lg">Category</label>
                            <select className="text-[14px] text-center shadow-lg">
                                <option> --Select Category--</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" font-semibold text-lg">Sub Category</label>
                            <select className="text-[14px] text-center shadow-lg">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 gap-4">

                        <div className="flex flex-col gap-2">
                            <label className=" font-semibold text-lg">Thumbnail</label>
                            <input className=" shadow-lg px-4 py-2 rounded-lg outline-none border-none"></input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" font-semibold text-lg">Thought Process</label>
                            <select className="text-[14px] text-center shadow-lg">
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full gap-8 flex justify-center items-center">
                        <button className="btn-blue w-full flex justify-center items-center gap-2">
                            <FaSave size={20}/>
                            <span>
                                Save Draft
                            </span>
                        </button>
                        <button className="btn-blue w-full flex justify-center items-center gap-2">
                            <FaCloudUploadAlt size={20}/>
                            <span>
                                Publish
                            </span>
                        </button>
                    </div>
                </div>

            </div>
            <div
                className=" flex flex-col border rounded-2xl overflow-hidden gap-4 max-h-[500px] shadow-xl overflow-y-scroll">
                <div className="bg-black text-white p-2 flex justify-center items-center">
                    <h1>{linkData?.tasks[0].assets[3].asset_title}</h1>
                </div>
                <p className="p-4">
                    <span className="text-xl font-semibold mr-2">Description:</span>
                    {linkData?.tasks[0].assets[3].asset_description}
                </p>

                <div className="flex flex-col gap-2">
                    <div className=" p-2 cursor-pointer bg-gray-50 flex gap-6">
                        <div
                            className={`transition-all duration-200 inline-flex justify-center items-center ${toggleThreadA ? "rotate-180 " : ""}`}>
                            <BiSolidUpArrow/>
                        </div>
                        <h1 className="text-lg font-semibold">Introduction</h1>
                    </div>
                    <div className=" p-2 cursor-pointer bg-gray-50 flex gap-6">
                        <div
                            className={`transition-all duration-200 inline-flex justify-center items-center ${toggleThreadA ? "rotate-180 " : ""}`}>
                            <BiSolidUpArrow/>
                        </div>
                        <h1 className="text-lg font-semibold">Thread A</h1>
                    </div>
                    <div className=" p-2 cursor-pointer bg-gray-50 flex gap-6">
                        <div
                            className={`transition-all duration-200 inline-flex justify-center items-center ${toggleThreadA ? "rotate-180 " : ""}`}>
                            <BiSolidUpArrow/>
                        </div>
                        <h1 className="text-lg font-semibold">Transition 1</h1>
                    </div>
                    <div className=" p-2 cursor-pointer bg-gray-50 flex gap-6">
                        <div
                            className={`transition-all duration-200 inline-flex justify-center items-center ${toggleThreadA ? "rotate-180 " : ""}`}>
                            <BiSolidUpArrow/>
                        </div>
                        <h1 className="text-lg font-semibold">Thread B</h1>
                    </div>
                    <div className=" p-2 cursor-pointer bg-gray-50 flex gap-6">
                        <div
                            className={`transition-all duration-200 inline-flex justify-center items-center ${toggleThreadA ? "rotate-180 " : ""}`}>
                            <BiSolidUpArrow/>
                        </div>
                        <h1 className="text-lg font-semibold">Conclusion</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CardsSection