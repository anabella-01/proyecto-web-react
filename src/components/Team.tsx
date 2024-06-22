import checkIcon from "../assets/images/icons/Icon1.svg";
import userIcon from "../assets/images/icons/Icon2.svg";
import trophyIcon from "../assets/images/icons/Icon3.svg";
import { Teammate } from "./Teammate";
import { useEffect,useState } from "react";
import { ITeammate } from "../types/teammate";

export function Team(){

    const [teammates, setTeammates]= useState([]);
    
    useEffect( ()=>{
        fetch("http://localhost:3000/team")
        .then((res)=>res.json())
        .then((data)=>setTeammates(data));

    },[]);


    return(      
    
    <section className="team">
        <div className="container team-container">
            <div className="team-info">
            <h2>We are proud of our design team</h2>
            <p>Just sit back and relax while we take care of your business needs for you.</p>
            </div>
            <div className="team-statistics">
            <div className="team-statistics-item">
            <div className="image">
                <img src={checkIcon} alt=""/>
            </div>
            <h3>1000+</h3>
            <p>Completed proyects</p>
            </div>
            <div className="team-statistics-item">
                <div className="image">
                    <img src={userIcon} alt=""/>
                </div>
             <h3>50k+</h3>
            <p>Happy Customers</p>
            </div>
            <div className="team-statistics-item">
                <div className="image">
                    <img src={trophyIcon} alt=""/>
                </div>
            <h3>20+</h3>
             <p>Awards won</p>
            </div>
        </div>
            <div className="team-list">
            {teammates.map((item:ITeammate)=>(
                <Teammate key={item.id} {...item} />
            ))}
                
            </div>
        </div>
    </section>)
}