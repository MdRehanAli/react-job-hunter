import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    return (
        <div>
            <h2>Job Details: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="border md:col-span-3">
                    <p><b>Job Description: </b>{job.job_description}</p>

                    <p><b>Job Responsibility: </b>{job.job_responsibility}</p>
                </div>
                <div className="border ">
                    <h2 className="text-2xl">Job Details</h2>
                    <button  className="btn btn-primary">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;