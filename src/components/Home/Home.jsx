import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Shows from '../Shows/Shows';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const Home = () => {
    
    return (
        <div className='bg-black'>
            
            <NavBar></NavBar>
            <Banner></Banner>
            <Shows></Shows>
            <Outlet></Outlet>
            <Footer></Footer>
            

                  
        </div>
    );
};

export default Home;