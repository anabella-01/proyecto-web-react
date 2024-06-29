import footerLogo from "../../assets/images/logo/logo-light.svg";
import { Button } from "../Button/Button";

export function Footer(){

    return(
        <footer className="bg-heading-color py-12 px-0">
        <div className="container grid grid-cols-1 md:grid-cols-2">
         <h2 className="text-white leading-10 text-4xl my-5">
            Join our community by using our services and grow your business.
         </h2>
         <Button customStyles="justify-self-center" content="Try it for free" href="/try"/>
        </div> 
        <hr className="m-4 border-white "/>
     <div className="container">    
        <div className="flex flex-wrap flex-col gap-5 my-10 mx-0 md:grid md:grid-cols-4">
            <div className="footer-content">
            <div className="logo">
                <img src={footerLogo} alt="Footer-logo"/>
            </div>
            <div className="footer-rights">
            <p className="text-footer-p m-1">© Sandbox.</p>
            <p className="text-footer-p m-1">All rights reserved.</p>
          </div>
         </div>
         <div className="footer-content">
            <h4>Get in Touch</h4>
            <p className="text-footer-p m-1">
                Moonshine St. 14/05 Light City, London,United Kingdom
            </p>
            <p className="text-footer-p m-1">
                info@email.com 00 (123) 456 78 90
            </p>
         </div>
         <div className="footer-content">
            <h4>Learn More</h4>
            <ul className="flex flex-col gap-5 text-lg leading-5 my-2.5">
                <li><a className="text-footer-p m-2.5"  href="/" >About us</a></li>
                <li><a className="text-footer-p m-2.5"  href="/" >Our Story</a></li>
                <li><a className="text-footer-p m-2.5"  href="/" >Projects</a></li>
                <li><a className="text-footer-p m-2.5"  href="/" >Terms of Use</a></li>
                <li><a className="text-footer-p m-2.5"  href="/" >Privacy Policy</a></li>
            </ul>
         </div>
         <div className="footer-content">
            <h4>Our newsletter</h4>
            <p className="text-footer-p m-1">
                Subscribe to our newsletter to get our news & deals delivered to you.
            </p>
            <form action="">
                <div className="flex my-5">
                    <div className="input-email">
                        <input type="email" placeholder="Email Address" name ="email" className= " bg-heading-color border-2 border-solid rounded-md border-paragraph-color h-[30px] w-[136px] outline-none p-2.5 placeholder:font-urbanist placeholder:text-#959CA9 leading-6 font-normal text-md lg:grid-cols-2"  autoComplete='off'/>
                    </div>
                    <div className="input-button">
                        <input type="submit" value="Join"  className="bg-primary-color rounded border-1 border-paragraph-color text-white font-Urbanist h-[29px] w-[50px] leading-6 outline-none cursor-pointer"/>
                    </div>
                </div>
            </form>
          </div>
        </div>
     </div>
 </footer>
    )
}