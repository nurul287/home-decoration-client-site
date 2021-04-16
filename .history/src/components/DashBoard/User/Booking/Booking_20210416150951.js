import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../../App";
import Payment from "../Payment/Payment";



const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookService, setBookService] = useState({});
  console.log(loggedInUser);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/singleService/${loggedInUser.serviceId}`)
      .then((res) => setBookService(res.data[0]))
      .catch((err) => console.log(err));
  }, [loggedInUser.serviceId]);
const {
  register,
  handleSubmit,
} = useForm();
const onSubmit = (data) => console.log(data);
  const handlePayment = ()=>{

  }
  return (
    <div>
      <h1 className="text-center">Booking</h1>

      <Row className="justify-content-center">
        <Col md={6}>
          <form onBlur={handleSubmit(onSubmit)} className="mt-5 p-2">
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              defaultValue={loggedInUser.name}
              placeholder="Your Name"
              {...register("userName", { required: true })}
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="email"
              placeholder="Your email"
              defaultValue={loggedInUser.email}
              {...register("email", { required: true })}
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              defaultValue={bookService.title}
              placeholder="Service Name"
              {...register("serviceName", { required: true })}
            />
          </form>
          <p>
            <small>Pay With</small>
          </p>
          <Payment handlePayment={handlePayment} />
          <p>Your Service charged will be ${bookService.price}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;