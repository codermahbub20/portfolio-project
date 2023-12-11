

const Education = () => {
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/yWNjc6V/site-bg.jpg)'}}>
            <div className="text-3xl font-bold mt-5 p-5 text-center">
                <h1 className="text-white">WHY CHOOSE ME</h1>
                <h1 className="text-[#ff014f]">MY Education AREA</h1>
            </div>

            <div className="lg:w-3/4 p-10 text-white mx-auto mt-5">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 text-[#ff014f] w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">June 2022 to Present</time>
                            <div className="text-lg font-black">B.Sc in Software Engineering</div>
                            Metropolitan University Sylhet
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 text-[#ff014f] w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2021</time>
                            <div className="text-lg font-black">Higher Secondary School Certificate</div>
                            Samuj Ali School And College
                        </div>
                        <hr />
                    </li>
                       
                </ul>
            </div>
        </div>
    );
};

export default Education;