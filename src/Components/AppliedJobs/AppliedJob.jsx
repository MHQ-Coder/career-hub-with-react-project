import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageData } from "../Utilites/LocalStorage";
import JobApply from "./JobApply";

const AppliedJob = () => {
    const jobs = useLoaderData();
    const [applied, setApplied] = useState([])
    const [displayJob, setDisplayJob] = useState([])

    useEffect(() => {
        const storedDataJobs = getStorageData();
        if (jobs.length > 0) {
            // const appliedJobs = jobs.filter(job => storedDataJobs.includes(job.id))
            // console.log(appliedJobs);
            // setApplied(appliedJobs)
            const jobApplied = []
            for (const id of storedDataJobs) {
                const appliedJobs = jobs.find(jobId => jobId.id === id)
                if (appliedJobs) {
                    jobApplied.push(appliedJobs)
                }

            }
            // console.log(jobApplied);
            setApplied(jobApplied)
            setDisplayJob(jobApplied)
        }
    }, []);

    const handlerJobs = filter => {
        if(filter === 'All'){
            setDisplayJob(applied)
        }
        else if (filter == 'Remote'){
            const remoteJob = applied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJob)
        }
        else if (filter === 'Onsite'){
            const onsiteJob = applied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJob)
        }

    }


    return (

        <div>
            <h3 className="text-3xl text-center font-semibold">Applied Jobs: {applied.length}</h3>
            <div className="flex justify-end my-6">

           
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handlerJobs('All')}><a>All</a></li>
                    <li onClick={() => handlerJobs('Remote')}><a>Remote</a></li>
                    <li onClick={() => handlerJobs('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            </div>
            <div className="">

                {displayJob.map((jobs, id) => <JobApply key={id} job={jobs}></JobApply>)}
            </div>

        </div>
    );
};

export default AppliedJob;