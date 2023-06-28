import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const DataContext = createContext({})

export function DataContextProvider({children}) {
    const [linkData, setLinkData] = useState();
    const [toggleThreadA, setToggleThreadA] = useState(true)

    const url =
        "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";

    const getData = () => {
        axios
            .get("/", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                        "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                    "Access-Control-Allow-Credentials": "true",
                },
            })
            .then((response) => {
                setLinkData(response.data);
            });
    };

    useEffect(() => getData(), []);


    return <DataContext.Provider value={{linkData, setLinkData, toggleThreadA, setToggleThreadA}}>
        {children}
    </DataContext.Provider>
}