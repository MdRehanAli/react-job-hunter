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
                <div>
                    <div className="border p-8 bg-[#7E90FE] bg-opacity-20 rounded-lg">
                    <h2 className="text-xl text-[#1A1919] font-extrabold pb-6 border-b border-gray-400">Job Details</h2>
                    <p className="text-xl text-[#474747] mt-6 mb-4"><b>Salary: </b>{job.salary}</p>
                    <p className="text-xl text-[#474747]"><b>Job title: </b>{job.job_title}</p>
                    <p  className="text-xl text-[#1A1919] font-extrabold mt-8 mb-6 pb-6  border-b border-gray-400">Contact Information</p>
                    <p className="text-xl text-[#474747]"><b>Phone: </b>{job.phone}</p>
                    <p className="text-xl text-[#474747] my-4"><b>Email: </b>{job.email}</p>
                    <p className="text-xl text-[#474747]"><b>Address: </b>{job.address}</p>
                    </div>

                    <button onClick={()=> handleApplyJob()} className="btn btn-primary w-full mt-6">Apply</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;