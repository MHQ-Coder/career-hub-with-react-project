import { FaRegUser, FaDollarSign } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const JobApply = ({ job }) => {

console.log(job);
    return (
        <div>

            <div>
                <div className=" bg-base-100 shadow-xl  flex gap-6 mb-16 rounded-md">
                    <figure><img className="w-96" src="https://i.ibb.co/hKScVPV/group-diverse-people-having-business-meeting-53876-25060.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{job.job_title}</h2>
                        <p>{job.company_name}</p>
                        <div className="card-actions flex justify-between">
                            <div className="flex gap-4">
                                <button className="btn border-[#7E90FE] text-[#7E90FE]">{job.remote_or_onsite}</button>
                                <button className="btn border-[#7E90FE] text-[#7E90FE]">{job.job_type}</button>
                            </div>
                            <button className="btn btn-primary">Details</button>
                        </div>
                        <div className="flex gap-4">
                            <span className="flex gap-2"><FaRegUser /> {job.location}</span>
                            <span className="flex gap-2"><FaDollarSign /> {job.salary}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;