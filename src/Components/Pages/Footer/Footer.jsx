import { FaGithub, FaLinkedinIn, FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid text-xl grid-flow-col gap-4">
                    <a>Home</a>
                    <a href="/about">About</a>
                    <a>Skills</a>
                    <a>Projects</a>
                    <a>Education</a>
                    <a>Contact</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/mahbub.khandakar.94"><FaSquareFacebook className="w-10 text-[#ff014f] h-10"></FaSquareFacebook></a>
                        <a href="www.linkedin.com/in/mahbub-khandakar-a61828291"><FaLinkedinIn className="w-10 text-[#ff014f] h-10"></FaLinkedinIn></a>
                        <a href="https://github.com/codermahbub20"><FaGithub className="w-10 text-[#ff014f] h-10"></FaGithub></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by Mahbub Portfolio</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;