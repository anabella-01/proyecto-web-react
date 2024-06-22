import logo from "../assets/images/logo/logo.svg";

export function Nav(){
    return (
        <nav>
        <div className="container nav-container">
            <div className="logo">
                <img src={logo} alt="Hero image"/>
            </div>
            <span className="btn-nav" id="btn-menu">Menu</span>
            <ul>
                <li><a href="/">Demos</a></li>
                <li><a href="/">Pages</a></li>
                <li><a href="/">Proyects</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Documentation</a></li>
                <li><a href="/">Contact</a></li>
                <span className="btn-nav" id="btn-close">Close</span>
            </ul>
        </div>
     </nav>
    );
}