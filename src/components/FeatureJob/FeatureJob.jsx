import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJob = () => {

    const [jobs, setJobs] = useState([])

    // This is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4)



    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div>
            <h2 className='text-5xl text-center'>Feature Jobs: {jobs.length}</h2>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illo dolores natus, aspernatur incidunt vero?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>

            <div className = {dataLength === jobs.length ?'hidden': ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeatureJob;