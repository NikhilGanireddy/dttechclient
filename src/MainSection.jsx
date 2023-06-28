import {useContext} from "react";
import {DataContext} from "./DataContext.jsx";

const MainSection = () => {

    const {linkData, setLinkData} = useContext(DataContext)

    return <div className=" flex flex-col justify-center items-center">
        <div className=" max-w-7xl w-full px-4 py-6 md:px-12 flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{linkData?.title}</h1>
                <button className="btn-blue">Submit Task</button>
            </div>
            <div className="bg-gray-200 w-full rounded-lg p-4">
                <h1 className="font-bold text-xl">{linkData?.tasks[0].task_title}</h1>
                <p className="space-y-2">{linkData?.tasks[0].task_description}</p>



            </div>
        </div>
    </div>
}

export default MainSection