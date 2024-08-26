import React, {useState, useEffect} from "react";
import "./Theme.css";

const Theme = ()=>{

    const [dark, setDark] = useState(false);

    useEffect (()=>{
        if (dark){
            document.documentElement.style.setProperty('--bgColor', '#0b102d');
            document.documentElement.style.setProperty('--whiteColor', '#faf4f4');
        }else{
            document.documentElement.style.setProperty('--bgColor', '#faf4f4');
            document.documentElement.style.setProperty('--whiteColor', '#0a0c53');
        }

    }, [dark])

    return(
        <div id="theme">
            {
                dark
                ?<i className="fa-solid fa-sun" onClick={()=> setDark(false)}></i>
                : <i className="fa-solid fa-moon" onClick={()=> setDark(false)}> </i>
            } 

        </div>
    )
}
export default Theme;