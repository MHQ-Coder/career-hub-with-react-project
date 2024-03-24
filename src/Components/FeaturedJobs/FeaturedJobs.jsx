import { useEffect, useState } from "react";
import Jobs from "./Jobs";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6">
                {jobs.slice(0, dataLength).map((job, idx) => <Jobs key={idx} jobs={job}></Jobs>)}

            </div>
                
            <div className={`text-center  my-6 ${dataLength === jobs.length ? "hidden" : ""}`}>
            
                <button onClick={() => setDataLength(jobs.length)} className="btn  bg-gradient-to-r from-indigo-200 via-purple-100">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;