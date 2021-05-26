import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./styleNotFound.css";
import backgroundImage from "./404-PagesBulb.jpg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const NotFound = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push("/");
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + backgroundImage + ")",
        backgroundSize: "cover",
        height: "120vh",
        padding: "10px"
      }}>
      <div style={{ backgroundPosition: "top 20px left" }}>
        <Button onClick={handleBack} variant="outlined" color="secondary">
          <Typography variant="h2"><ArrowBackIosIcon /> Take me Home!</Typography>
        </Button>
      </div>
    </div>
  );
};
