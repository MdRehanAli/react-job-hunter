import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Oops! Error Ocurred!</h1>
            <Link to = '/'><button className="btn">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;