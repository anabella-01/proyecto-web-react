import { useState,useEffect } from "react";
import {Testimonial} from "./Testimonial";
import { ITestimonial } from "../../types/testimonial";


export function Testimonials(){
    
    const [testimonials,setTestimonials] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/testimonials")
        .then((res)=>res.json())
        .then((data)=>setTestimonials(data));
    })

    return(
        <section className="bg-light-grey py-[70px] px-0 ">
        <div className="container">
            <h2 className="max-w-[670px] mt-0 mx-auto mb-12 text-center">Don't take our word for it. See what customers are saying about us.</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item: ITestimonial) =>(
                <Testimonial key={item.id} {...item} />
            ))}
        </div>
      </div>
    </section>
    )
}