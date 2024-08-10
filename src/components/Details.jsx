import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaPlus, FaMinus, FaGithub } from "react-icons/fa6";

const Details = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='mt-5'>
            <div className="mt-3 flex w-full items-center justify-center">
                <button
                    type="button"
                    className="rounded-md p-3 bg-indigo-600 w-full md:w-80 lg:w-96 py-2 
                        text-sm font-semibold flex flex-row justify-between items-center
                         text-white shadow-sm hover:bg-indigo-500
                          focus-visible:outline focus-visible:outline-2
                           focus-visible:outline-offset-2 mb-2
                            focus-visible:outline-indigo-600"
                    onClick={() => setToggle(!toggle)} >
                    {toggle ? (
                        <>
                            Hide Developer Details <FaMinus className='ml-3' />
                        </>
                    ) : (
                        <>
                            Show Developer Details <FaPlus className='ml-3' />
                        </>
                    )}
                </button>
            </div>

            <div className={`transition-all duration-500 ease-in-out  overflow-hidden ${toggle ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-xl mt-3">
                    <figure>
                        <img
                            src="image/bijoy.png"
                            alt="Developer"
                            className='rounded-md mt-3'
                        />
                    </figure>
                    <div className="card-body flex flex-col items-center text-center">
                        <h2 className="card-title flex flex-col items-center">
                            Name: Bejoy Munshi
                            <div className="bg-sky-500 p-1 w-full text-sm rounded text-white mt-2">Software Engineer</div>
                        </h2>
                        <p className="mt-2">University: United International University</p>
                        <p>CGPA: 3.16</p>
                        <div className="card-actions flex justify-center mt-4">
                            <div className="rounded-full p-2 text-sm allIcn">
                                <a href="https://www.facebook.com/zh.bijoy.73/"> <FaFacebookF /></a>
                            </div>
                            <div className="rounded-full p-2 text-sm allIcn">
                                <a href="https://www.linkedin.com/in/bejoy-munshi-11b015218/"><FaLinkedinIn /></a>
                            </div>
                            <div className="rounded-full p-2 text-sm allIcn">
                                <a href="https://github.com/BEJOY474"><FaGithub /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;
