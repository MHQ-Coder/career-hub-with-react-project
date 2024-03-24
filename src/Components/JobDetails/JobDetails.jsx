import { useLoaderData, useParams } from "react-router-dom";
import { setStorageData } from "../Utilites/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const allJobs = useLoaderData()
    const { id } = useParams() //destructuring 
    const idInt = parseInt(id)
    const jobs = allJobs.find(job => job.id === idInt);
    console.log(jobs);

    const handlerAppliedBtn = () => {
        setStorageData(idInt)
        toast("You have a successfully added!")
        
    }

    return (
        <div className="my-16">
            <h2 className="text-3xl text-center font-bold">Job Details: {allJobs.length} </h2>
            <div className="grid grid-cols-4 gap-4 my-12">


                <div className="grid col-span-3 ">
                    <div className="space-y-6">
                        <div className="space-y-6">
                            <p> <span className=" font-semibold">Job Description: </span>{jobs.job_description}</p>
                            <p><span className=" font-semibold">Job Responsibility: </span>{jobs.job_responsibility}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Educational Requirements:</h2>
                            <p>{jobs.educational_requirements}</p>

                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Experience</h2>
                            <p>{jobs.experiences}</p>
                            <div className="divider"></div>


                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-gradient-to-r from-indigo-200 rounded-md p-2 space-y-5">
                        <h3 className="text-lg font-bold">Job Details</h3>
                        <div className="divider"></div>
                        <div>
                            <h3 > <span className="font-semibold"> Salary:</span> {jobs.salary}</h3>
                            <h3> <span className="font-semibold">Job Title:</span> {jobs.job_title} </h3>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Contact Information</h2>
                            <div className="divider"></div>
                            <div>
                                <h2 > <span className="font-semibold">Phone:</span>{jobs.contact_information.phone}</h2>
                                <h2 > <span className="font-semibold">Email:</span>{jobs.contact_information.address}</h2>
                                <h2 > <span className="font-semibold">Address:</span>{jobs.contact_information.email }</h2>
                            </div>
                        </div>
                    </div>
                    <button onClick={handlerAppliedBtn} className="btn btn-primary w-full mt-6">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;