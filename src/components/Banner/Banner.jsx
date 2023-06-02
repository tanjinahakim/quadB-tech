import { Button } from 'react-bootstrap';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="banner ">
            <h1 className='text-white text-center fs-1 fw-bold'>Welcome to Holiday Nights</h1>
            <p className='text-white text-center fs-5'>Enjoy your holidays with exclusive shows</p>
            <div className='text-center'>
            <Link to={'/shows'}><Button  variant="outline-danger">Explore Shows</Button></Link>
            </div>
        </div>
    );
};

export default Banner;