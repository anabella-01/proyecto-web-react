import { useState,useEffect } from "react";
import { FAQ } from "./FAQ";
import { IFAQ } from "../types/faqs";
import { Button } from "./Button";

export function Faqs(){

    const [faqs,setFaqs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/faqs")
        .then((res)=>res.json())
        .then((data)=>setFaqs(data));
    })

    return(

        <section className="faqs">
        <div className="container faqs-container">
            <div className="left">
                <h2>If you don't see an answer to
                    your question, you can send us
                    an email from our contact form.</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit. Nullam quis risus eget urna mollis ornare.</p>
                < Button content="All FAQ" href="/faqs"/>
            </div>
            <div className="right">
                <div className="faqs-list">
                    {faqs.map((item:IFAQ)=>(
                        <FAQ key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}