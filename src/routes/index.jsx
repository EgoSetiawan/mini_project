import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailGame from "../pages/DetailGame";
import Landing from "../pages/Landing";
import ReviewList from "../pages/ReviewList";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/Review" element={<ReviewList />} />
          <Route path="/DetailGame" element={<DetailGame />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouter;
