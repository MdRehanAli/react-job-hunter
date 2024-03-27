
import { IoLocation } from "react-icons/io5";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job

    return (
        <div className="flex justify-around items-center rounded-xl">

            <div className="w-full rounded-xl bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-5">
                        <h2 className="flex items-center text-sm "><IoLocation /> <span className="ml-1">{location}</span></h2>
                        <h2 className="flex items-center text-sm">
                            <HiMiniCurrencyDollar />
                            <span className="ml-1">{salary}</span>
                        </h2>
                    </div>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="card-actions">
                        <Link to = {`/job/${id}`}>
                            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;