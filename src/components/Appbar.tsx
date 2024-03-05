import { useState } from "react"
import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();
    const name = localStorage.getItem("name")
    const[open, setOpen] = useState(false);
    function handleClick(){
        localStorage.clear();
        navigate("/signin");
    }
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex font-bold flex-col justify-center cursor-pointer">
                My Journal
        </Link>
        <div className="flex">
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            <div onClick={()=>setOpen(!open)} className="flex cursor-pointer flex-col items-center select-none">
            
            <Avatar  size={"big"}  name={name} />
            <button onClick={handleClick} className={`absolute font-semibold  top-16 border-2 bg-slate-300 rounded-lg px-3 py-1 ${open? "block": "hidden"}`}>Sign-out</button>
            </div>
        </div>
    </div>
}