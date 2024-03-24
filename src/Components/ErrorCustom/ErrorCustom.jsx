import { Link } from "react-router-dom";

const ErrorCustom = () => {
    return (
        <div  className="text-center ">
            <h2 className="text-4xl text-red-500 text-center">Opss!!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to='/'><button className="btn">Back to Home</button></Link>
        </div>
    );
};

export default ErrorCustom;