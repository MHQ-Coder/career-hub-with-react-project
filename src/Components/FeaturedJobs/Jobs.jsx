/* eslint-disable react/prop-types */
import { FaRegUser, FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { FaDollarSign } from "react-icons/fa6";

const Jobs = ({ jobs }) => {
    const {id, logo, job_title, company_name, remote_or_onsite,
         location, job_type, salary} = jobs;
    return (
        <div>
            <div className="car bg-base-100 shadow-xl rounded-md">
                <img className="p-2" src={logo} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4">
                        <button className="btn border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    
                    <div className="flex gap-4">
                     <span className="flex gap-2"><FaRegUser /> {location}</span>
                     <span className="flex gap-2"><FaDollarSign /> {salary}</span>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/jobs/${id}`}> 
                        <button className="btn  bg-gradient-to-r from-indigo-200 via-purple-100">Job Details</button>
                        </Link>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;