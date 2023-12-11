import { FaDownload, FaGithub, FaLinkedinIn, FaSquareFacebook } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {

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
        <div style={{backgroundImage: 'url(https://i.ibb.co/yWNjc6V/site-bg.jpg)'}} className="hero min-h-[100vh] ">
            <div className="hero-content p-5 flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/7ndSdw4/Mahbub11.jpg" className="md:max-w-sm sm:w-sm rounded-lg shadow-2xl" />
                <div className="space-y-2">
                    <h1 className="text-4xl space-y-2 text-white font-bold">Hey, I am <br /> <span>Mahbub Khandakar</span></h1>
                    <h2 className="text-4xl  font-bold text-white">
                        a
                        <span className="text-[#ff014f]">
                            <Typewriter words={[" MERN STACK DEVELOPER."," REACT JS DEVELOPER.","  FRONTEND DEVELOPER.","  JAVASCRIPT DEVELOPER."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={60} delaySpeed={1000} />
                        </span>
                    </h2>

                    <p className="py-6 text-xl text-white">As a MERN stack developer, my objective is to leverage my expertise in MongoDB, Express.js, React, and Node.js to craft innovative and efficient web solutions. I am dedicated to creating seamless user experiences and contributing to the success of projects through my skills in full-stack development and problem-solving.</p>
                    <div className="flex gap-4">
                    <button className="btn bg-[#ff014f] text-white" onClick={handleDownload}>Resume <FaDownload></FaDownload></button>
                        <a href="https://www.facebook.com/mahbub.khandakar.94"><FaSquareFacebook className="w-10 text-[#ff014f] h-10"></FaSquareFacebook></a>
                        <a href="www.linkedin.com/in/mahbub-khandakar-a61828291"><FaLinkedinIn className="w-10 text-[#ff014f] h-10"></FaLinkedinIn></a>
                        <a href="https://github.com/codermahbub20"><FaGithub className="w-10 text-[#ff014f] h-10"></FaGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;