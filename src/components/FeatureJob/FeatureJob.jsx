import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJob = () => {

    const [jobs, setJobs] = useState([])

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
            <div>
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJob;