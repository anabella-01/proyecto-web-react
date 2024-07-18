import checkIcon from "../../assets/images/icons/Icon1.svg";
import userIcon from "../../assets/images/icons/Icon2.svg";
import trophyIcon from "../../assets/images/icons/Icon3.svg";
import { Teammate } from "../Team/Teammate";
import { useEffect,useState } from "react";
import { ITeammate } from "../../types/teammate";


export function Team(){

    const [teammates, setTeammates]= useState([]);
    
    useEffect( ()=>{
        fetch("http://localhost:3000/team")
        .then((res)=>res.json())
        .then((data)=>setTeammates(data));

    },[]);


    return(      
    
    <section className="bg-gray pt-12 px-0 pb-24">
        <div className="container grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr_auto]">
            <div className="max-w-fit">
            <h2>We are proud of our design team</h2>
            <p className="pt-2.5">Just sit back and relax while we take care of your business needs for you.</p>
            </div>
            <div className="flex flex-wrap gap-20">
            <div className="flex flex-col items-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue p-4 w-fit rounded-full">
                <img className="h-[26px]" src={checkIcon} alt=""/>
            </div>
            <h3 className="text-4xl pt-5">1000+</h3>
            <p>Completed proyects</p>
            </div>
            <div className= "flex flex-col items-center text-center md:gap-3 flex-1 ">
            <div className="bg-skyblue p-4 w-fit rounded-full">
                    <img className="h-[26px]" src={userIcon} alt=""/>
                </div>
             <h3 className="text-4xl pt-5">50k+</h3>
            <p>Happy Customers</p>
            </div>
            <div className= "flex flex-col items-center text-center md:gap-3 flex-1">
            <div className="bg-skyblue p-4 w-fit rounded-full">
                    <img className="h-[26px]" src={trophyIcon} alt=""/>
                </div>
            <h3 className="text-4xl pt-5">20+</h3>
             <p>Awards won</p>
            </div>
        </div>
            <div className="grid gap-5 grid-cols-1 col-span-full md:grid-cols-2 lg:grid-cols-4">
            {teammates.map((item:ITeammate)=>(
                <Teammate key={item.id} {...item} />
            ))}
                
            </div>
        </div>
    </section>)
}