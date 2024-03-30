import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("Applied Successfully!")
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-3 ">
                <div className="border md:col-span-2">
                    <p><b>Job Description: </b>{job.job_description}</p>

                    <p><b>Job Responsibility: </b>{job.job_responsibility}</p>
                    <p><b>Educational Requirements: </b>{job.educational_requirements}</p>
                    <p><b>Experiences: </b>{job.experiences}</p>
                </div>
                <div className="border ">
                    <h2 className="text-2xl">Job Details</h2>
                    <p><b>Salary: </b>{job.salary}</p>
                    <p><b>Job title: </b>{job.job_title}</p>
                    <p>Contact Information</p>
                    <p><b>Phone: </b>{job.phone}</p>
                    <p><b>Email: </b>{job.email}</p>
                    <p><b>Address: </b>{job.address}</p>

                    <button onClick={()=> handleApplyJob()} className="btn btn-primary w-full">Apply</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;