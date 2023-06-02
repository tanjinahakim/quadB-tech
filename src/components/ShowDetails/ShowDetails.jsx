import { Button, Image } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

const ShowDetails = () => {
    const shows = useLoaderData();
    console.log(shows);
    const {name,summary,image,id}=shows

    return (
        <div className="text-white bg-black">
            <NavBar></NavBar>
            <div className="p-5">
            <h1 className="text-center">{name}</h1>
            <div className="d-flex justify-content-center align-items-center mx-5">
            <Image src={image.medium}></Image>
            <div className="p-5">
            <p>{summary.replace(/<\/?(p|b)>/g, '')}</p>
            <Link to={`/bookedTicket/${id}`}><Button variant="outline-danger">Get Ticket</Button></Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ShowDetails;