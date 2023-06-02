import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BookedTicket = () => {
    const show = useLoaderData();
    const {name}=show;
    const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reservationName=form.name.value
    const email=form.email.value
    const numTickets=form.numTickets.value
        // Retrieve existing reservation data from local storage
    const existingData = localStorage.getItem('reservationData');
    let reservationData = [];

    if (existingData) {
        // If existing data is present, parse it from JSON
        reservationData = JSON.parse(existingData);
    }

    // Create a new reservation object
    const newReservation = {
        reservationName,
        email,
        numTickets,
    };

    // Add the new reservation object to the array
    reservationData.push(newReservation);

    // Store the updated reservation data in local storage
    localStorage.setItem('reservationData', JSON.stringify(reservationData));
    form.reset();
    };
  const notify = () => toast("Your Ticket is booked");
    return (
        <div className='text-white bg-black'>
            <NavBar></NavBar>
             <Form className='w-25 mx-auto py-5' onSubmit={handleFormSubmit}>
             
             <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Show Name</Form.Label>
            <Form.Control type="text"  defaultValue={name} readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicReservationName">
            <Form.Label>Reservation Name</Form.Label>
            <Form.Control type="text" name='name' placeholder='Rservation Name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTicket">
                <Form.Label>Number of Tickets</Form.Label>
                <Form.Control type="number" name='numTickets' placeholder="No of tickets" />
            </Form.Group>
      <div>
      <Button variant="outline-danger" type="submit" onClick={notify}>
        Booked Ticket
      </Button>
      <ToastContainer />
      </div>
    </Form>
        </div>
    );
};

export default BookedTicket;