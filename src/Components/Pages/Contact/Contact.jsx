import Lottie from 'lottie-react';
import ContactImg from '../../../assets/Contact.json'

const Contact = () => {
    return (
        <div style={{backgroundImage: 'url(https://i.ibb.co/yWNjc6V/site-bg.jpg)'}}>
            <div className="text-3xl font-bold mt-5 p-5 text-center">
                <h1 className="text-white">CONTACT WITH ME</h1>
                <h1 className="text-[#ff014f]">WITHOUT HESITATION</h1>
            </div>
            <div>
                <div className="hero min-h-[70vh]">
                    <div className="hero-content flex-col lg:flex-row">
                        <div >
                           <Lottie animationData={ContactImg}></Lottie>
                        </div>
                        <div className="card shrink-0 w-full max-w-xl shadow-2xl border ">
                            <form className="card-body ">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn text-xl text-white bg-[#ff014f]">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;