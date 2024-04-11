import React from "react";
import { Link, Typography, Container, Box } from "@material-ui/core";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(7),
      padding: theme.spacing(1),
      backgroundColor: "#252F22",
      color: "#EDF1D6",
    },
    h2text: {
      fontSize: "1rem",
      lineHeight: "1rem",
      textAlign: "right",
    },
    title: {
      fontWeight: 500,
      fontSize: "3.4rem",
      textAlign: "center",
    },
    navbarItems: {
      display: "flex",
      marginTop: "3rem",
      marginLeft: "1rem",
    },
    navbarText: {
      fontSize: "1rem",
      lineHeight: "1rem",
      cursor: "pointer",
      textTransform: "capitalize",
      marginRight: "0.8rem",
      textAlign: "center",
    },
    footNote: {
      fontSize: "0.8rem",
      textAlign: "center",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navbarItems = ["Home", "About", "People", "Events", "Internships"];

  const handlePageNavigation = (page: string) => {
    if (page === "Home") {
      navigate("/");
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box display={"div"}>
        <Typography
          style={{ textAlign: "right", marginTop: "20px" }}
          className={classes.h2text}
        >
          FOLLOW US ON
        </Typography>
        <Box display={"div"} style={{ textAlign: "right", margin: "10px 0" }}>
          <Link href="#" color="inherit" style={{ margin: "0 5px" }}>
            <LinkedInIcon />
          </Link>
          <Link href="#" color="inherit" style={{ margin: "0 5px" }}>
            <XIcon />
          </Link>
          <Link href="#" color="inherit" style={{ margin: "0 5px" }}>
            <YouTubeIcon />
          </Link>
        </Box>
      </Box>
      <Box display={"div"} className={classes.navbarItems}>
        {navbarItems.map((item, i) => (
          <Typography
            className={classes.navbarText}
            key={i}
            onClick={() => handlePageNavigation(item)}
          >
            {item}
          </Typography>
        ))}
      </Box>
      <Typography className={classes.title}>SUSTAINABLE</Typography>
      <Typography className={classes.footNote}>
        © 2028 By Center For Logistics IIT Madras
      </Typography>
    </Container>
  );
};

export default App;
