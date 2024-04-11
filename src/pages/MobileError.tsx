import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundColor: "#edf1d6",
        height: "80vh",
        textAlign: "center",
        paddingTop: "10%",
      }}
    >
      <Typography
        variant="h1"
        style={{ fontWeight: 500, fontSize: "8rem", color: "#0b1215" }}
      >
        404
      </Typography>
      <img
        src="https://social-hero.s3.ap-south-1.amazonaws.com/Icons/broken-link-2-svgrepo-com+1.svg"
        alt="Broken Link"
        style={{ height: "5rem", marginBottom: "1rem" }}
      />
      <Typography
        variant="h4"
        style={{
          fontWeight: 500,
          fontSize: "2rem",
          color: "#0b1215",
          marginBottom: "2rem",
        }}
      >
        Something is wrong
      </Typography>
      <Button
        variant="contained"
        onClick={handleBackHome}
        style={{
          backgroundColor: "#252f22",
          color: "#edf1d6",
          padding: "0.5rem 4rem",
          fontSize: "1.3rem",
          borderRadius: 0,
        }}
      >
        GO BACK TO HOME
      </Button>
    </Container>
  );
};

export default NotFoundPage;
