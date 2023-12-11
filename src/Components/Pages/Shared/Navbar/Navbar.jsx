import { FaDownload } from "react-icons/fa6";



const Navbar = () => {

    
    const handleDownload = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1ElbPDMjto4-9zENUByspkp7DASG0XR2Q/view?usp=sharing';
      
        // Open the PDF in a new tab
        const newTab = window.open(pdfUrl, '_blank');
      
        // If the new tab is blocked by the browser's popup blocker
        if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
          alert('Please allow pop-ups to view the PDF.');
        }
      };
      
      

    return (
        <div>
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Education</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <p className="text-xl">Mah<span className="text-[#ff014f]">Bub</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-xl menu-horizontal px-1">
                    <li><a>Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Education</a></li>
                            <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn bg-[#ff014f] text-white" onClick={handleDownload}>Resume <FaDownload></FaDownload></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;