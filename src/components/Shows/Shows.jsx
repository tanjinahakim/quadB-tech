import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Shows = () => {
    const [movie,setMovie]=useState([]);
    const [showAll,setShowAll]=useState(false);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>{
            setMovie(data)
            console.log(data)
        })
    },[])

    const handleShowAll = ()=>{
        setShowAll(prevShowAll => !prevShowAll);
    }
    const displayedShows = showAll ? movie : movie.slice(0, 3);
    return (
       <div>
        <h1 className='text-white text-center mt-5'>Todays Show</h1>
         <Container>
        <Row>
                {
                displayedShows.map((show) => (

                    <Col md={4} key={show.show.id } className='mt-5 pe-1'> 
                    <Card style={{ width: '18rem' }} className='bg-black border-2 border-white text-white'>
                    <Card.Img variant="top" src={show.show.image.medium} style={{objectFit: "cover",height:"15vw"}}/>
                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'>{show.show.name}</Card.Title>
                        <p>Language: {show.show.language}</p>
                        <p>Premired: {show.show.premiered}</p>
                        <Link to={`/showDetails/${show.show.id}`}>
                        <Button variant="outline-danger">View Details</Button></Link>
                    </Card.Body>
                    </Card>
                    </Col>


                    ))
                   
                }
        </Row>
    </Container>
                <div className='my-4 text-center' onClick={handleShowAll}>
                    <Button variant="outline-danger">{showAll ? 'Show Less' : 'Show More'}</Button>
                </div>
       </div>
    );
};

export default Shows;