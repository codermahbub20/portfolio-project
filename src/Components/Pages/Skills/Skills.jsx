import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div>
            <div className="text-3xl font-bold mt-5 text-center">
                <h1>WHY CHOOSE ME</h1>
                <h1 className="text-[#ff014f]">MY SKILLS AREA</h1>
            </div>

            <div className="grid md:grid-cols-2 mt-10 p-5 text-xl w-11/12 mx-auto gap-6">
                <div>
                    <label className="mb-2" htmlFor="">HTML</label>
                    <ProgressBar  className="mb-3" completed={90} />
                    
                    <label htmlFor="">CSS</label>
                    <ProgressBar  className="mb-3" completed={80} />

                    <label htmlFor="">BOOTSTRAP</label>
                    <ProgressBar  className="mb-3" completed={70} />

                    <label htmlFor="">TAILWIND CSS</label>
                    <ProgressBar  className="mb-3" completed={95} />

                    <label htmlFor="">JAVASCRIPT</label>
                    <ProgressBar  className="mb-3" completed={85} />

                    <label htmlFor="">REACT JS</label>
                    <ProgressBar  className="mb-3" completed={90} />

                </div>

                <div>
                    <label htmlFor="">FIREBASE AUTHENTICATION</label>
                    <ProgressBar  className="mb-3" completed={80} />
                    
                    <label htmlFor="">NODE JS</label>
                    <ProgressBar  className="mb-3" completed={50} />

                    <label htmlFor="">EXPRESS JS</label>
                    <ProgressBar  className="mb-3" completed={70} />

                    <label htmlFor="">AXIOS</label>
                    <ProgressBar  className="mb-3" completed={60} />

                    <label htmlFor="">TRANSTACK QUERY</label>
                    <ProgressBar  className="mb-3" completed={55} />

                    <label htmlFor="">JSON WEB TOKEN</label>
                    <ProgressBar  className="mb-3" completed={80} />

                </div>
            </div>
            
        </div>
    );
};

export default Skills;

