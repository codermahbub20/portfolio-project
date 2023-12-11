import { FaStar } from "react-icons/fa6";


const Projects = () => {
    return (
        <div>
            <div className="text-3xl font-bold mt-5 text-center">
                <h1>WHY CHOOSE ME</h1>
                <h1 className="text-[#ff014f]">My Recent Projects</h1>
            </div>

            <div className="lg:w-10/12 mx-auto gap-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img
                        className="p-4 rounded-xl w-full object-cover object-top hover:object-bottom duration-1000"
                        src="https://i.ibb.co/rwmGpvH/screencapture-building-management-b02ba-web-app-2023-12-11-23-04-44.png"
                        alt=""
                        style={{ height: '300px' }}
                    /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><FaStar></FaStar> WestCo</h2>
                        <p className="text-xl">Building Management Project</p>
                        <div className="card-actions  flex">
                        <a className="btn btn-sm text-white bg-[#ff014f] w-full" href="https://building-management-b02ba.web.app/">LiveLink</a>

                            <button className="btn text-white w-full btn-sm bg-[#ff014f]"><a href="https://github.com/codermahbub20/building-management-client-side">ClientSide Code</a></button>

                            <button className="btn text-white bg-[#ff014f] w-full btn-sm "><a href="https://github.com/codermahbub20/building-management-server-side">ServerSide Code</a></button> 
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img
                        className="p-4 rounded-xl w-full object-cover object-top hover:object-bottom duration-1000"
                        src="https://i.ibb.co/1vbS5jf/screencapture-online-group-study-crud-jwt-web-app-2023-12-11-23-05-02.png"
                        alt=""
                        style={{ height: '300px' }}
                    /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><FaStar></FaStar>OmeXo</h2>
                        <p className="text-xl">Online Group Study Project</p>
                        <div className="card-actions  flex">
                        <a className="btn btn-sm text-white bg-[#ff014f] w-full" href="https://online-group-study-crud-jwt.web.app/">LiveLink</a>

                            <button className="btn text-white w-full btn-sm bg-[#ff014f]"><a href="https://github.com/codermahbub20/online-group-study-client-side">ClientSide Code</a></button>

                            <button className="btn text-white bg-[#ff014f] w-full btn-sm "><a href="https://github.com/codermahbub20/online-group-study-server-side">ServerSide Code</a></button> 
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img
                        className="p-4 rounded-xl w-full object-cover object-top hover:object-bottom duration-1000"
                        src="https://i.ibb.co/F07mhrX/screencapture-automotive-react-auth-web-app-2023-12-11-23-05-26.png"
                        alt=""
                        style={{ height: '300px' }}
                    /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><FaStar></FaStar>CarSpot</h2>
                        <p className="text-xl">Automotive Online Car Sell Project</p>

                        <div className="card-actions  flex">
                        <a className="btn btn-sm text-white bg-[#ff014f] w-full" href="https://automotive-react-auth.web.app/">LiveLink</a>

                            <button className="btn text-white w-full btn-sm bg-[#ff014f]"><a href="https://github.com/codermahbub20/online-group-study-client-side">ClientSide Code</a></button>

                            <button className="btn text-white bg-[#ff014f] w-full btn-sm "><a href="https://github.com/codermahbub20/automotive-project-server-side">ServerSide Code</a></button> 
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;