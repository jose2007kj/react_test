import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
	let token = localStorage.getItem('tranzmeo_token')
	if(token) return children
  return( 
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
