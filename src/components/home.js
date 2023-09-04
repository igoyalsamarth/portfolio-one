import Navbar from "./navbar";
import HomePage from "./homepage";
import About from "./about";
import Work from "./work";
import Contact from "./contact";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home(props){
    const [isWorthy,setIsWorthy] = useState(props.worth);
    useEffect(() => {
        setIsWorthy(props.worth)
    },[props.worth])


    return(
        <div className="wrapper flex flex-col ">
            <Navbar worth={isWorthy}/>
            <Routes>
            <Route path = '/' element={<HomePage worth={isWorthy}/>}/>
            <Route path = '/work' exact element={<Work worth={isWorthy} />}/>
            <Route path = '/about' exact element={<About worth={isWorthy}/>}/>
            <Route path = '/contact' exact element={<Contact worth={isWorthy}/>}/>
            </Routes>
            
        </div>
    );
}