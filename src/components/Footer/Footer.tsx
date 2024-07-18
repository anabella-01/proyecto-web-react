import footerLogo from "../../assets/images/logo/logo-light.svg";
import { Button } from "../Button/Button";

export function Footer(){
    return(
        
    <footer className="bg-heading-color md:px-14 p-5 max-w-screen-3xl mx-auto py-10">
        <div className="grid grid-cols-1 space-y-8 md:grid-cols-2  md:justify-items-end container mx-auto lg:mb-10 lg:items-center">
            <div>
            <h4 className="font-semibold text-3xl lg:text-4xl lg:w-2/2 ">
            Join our community by using our
            services and grow your business.
            </h4>         
            </div>
            <div className="">
                <Button content="Try it for Free" href="/"/>    
            </div>
        </div>
            <hr className="text-white mt-10"/>

        <div className="grid grid-cols-1 mt-10 lg:grid-cols-4">
            <div className="flex-col space-y-4 ">
            <div className="mt-3 cursor-pointer">
                <img src={footerLogo} alt="logo" />
            </div>
            <div>
                <p className="text-footer-p font-medium">
                © 2023 Sandbox.
                All rights reserved.</p>
            </div>
            </div>


            <div className="space-y-4  mt-5 md:mt-0 ">
            <h3 className="font-semibold text-white">Get in Touch</h3>
            <p className="text-footer-p">Moonshine St. 14/05
            Light City, London,
            United Kingdom
            </p>
            <p className="text-footer-p">info@email.com
            00 (123) 456 78 90
            </p>
            </div>

            <div className="">
                <ul className="flex-col mb-10">
                    <li><a href="/" className="font-semibold text-white text-2xl">Learn More</a></li>
                    <li><a href="/" className="text-footer-p hover:text-white">About Us</a></li>
                    <li><a href="/" className="text-footer-p hover:text-white">Our Story</a></li>
                    <li><a href="/" className="text-footer-p hover:text-white">Terms of Use</a></li>
                    <li><a href="/" className="text-footer-p hover:text-white">Projects</a></li>
                    <li><a href="/" className="text-footer-p hover:text-white">Privacy Policy</a></li>
                </ul>
            </div>

            <div>
                <div className="space-y-3">
                    <h3 className="font-semibold text-white text-2xl">
                        Our Newsletter
                        </h3>
                    <p className="text-footer-p">Subscribe to our newsletter to get our
                    news & deals delivered to you.</p>
                </div>

                 <div className="mt-8 flex ">
                  <input type="email" name="email" id="email" placeholder="Email Address" className="bg-paragraph-color rounded-md focus:outline-none w-2/3 md:w-auto 
                  lg:w-[150px] xl:w-auto bg-opacity-65 py-2 px-4"/>
                  <input type="submit" value="Subscribe" className="px-4 py-2 bg-primary-color rounded-md -ml-3 cursor-pointer hover:bg-white hover:text-heading-color hover:border-heading-color border-1 text-white w-auto"/>
                </div>
            </div>
        </div>
  </footer>
    )
}