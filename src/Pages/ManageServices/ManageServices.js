import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./ManageServices.css";

const ManageServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://limitless-harbor-13956.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Added A New Service");
          reset();
        }
      });
  };
  return (
    <Container className="text-center container-fluid manage-services">
      <h2 className="text-primary  my-3">Add A Service</h2>
      <Container className="my-5 d -flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Index Num"
            type="number"
            {...register("index", { required: true, min: 0, max: 99 })}
          />
          <br />
          <input
            placeholder="Enter Code"
            className="my-2"
            {...register("_key", { required: true, maxLength: 20 })}
          />
          <br />

          <input
            placeholder="Enter Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <br />
          <input
            placeholder="Enter Place"
            className="my-2"
            {...register("place", { required: true, maxLength: 20 })}
          />
          <br />
          <input
            placeholder="Enter Duration"
            {...register("duration", { required: true, maxLength: 50 })}
          />
          <br />
          <input
            placeholder="Enter Date"
            className="my-2"
            type="text"
            {...register("date")}
          />
          <br />
          <input
            placeholder="Enter Airport"
            {...register("airport", { required: true, maxLength: 20 })}
          />
          <br />
          <input
            placeholder="Enter Extras"
            className="my-2"
            {...register("extras", { required: true, maxLength: 20 })}
          />
          <br />
          <input
            placeholder="Enter Price"
            type="number"
            {...register("price")}
          />
          <br />
          <textarea
            placeholder="Enter Details"
            className="my-2 "
            {...register("details", { required: true, maxLength: 500 })}
          />
          <br />
          <input
            placeholder="Enter Image URL"
            {...register("image", { required: true, maxLength: 500 })}
          />
          <br />
          <input className="my-2 btn btn-success" type="submit" />
          <br />
        </form>
      </Container>
    </Container>
  );
};

export default ManageServices;
