import React from "react";
import { Link, Typography, Container, Box } from "@material-ui/core";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(7),
      padding: theme.spacing(4),
      paddingTop: theme.spacing(7),
      position: "absolute",
      left: 0,
      right: 0,
    },
    h2text: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
    title: {
      fontWeight: 600,
      fontSize: "13rem",
      lineHeight: "13rem",
      textAlign: "center",
    },
    navbarItems: {
      display: "flex",
      padding: "1rem 0",
      width: "90%",
      margin: "0 auto",
    },
    navbarText: {
      fontSize: "1.3rem",
      lineHeight: "1.3rem",
      cursor: "pointer",
      textTransform: "capitalize",
      marginRight: "4rem",
      textAlign: "center",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  const navbarItems = ["Home", "People", "Internships", "Vision", "About Us"];

  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "#252F22", color: "#EDF1D6" }}
      className={classes.root}
    >
      <Box display={"div"}>
        <Typography
          variant="h6"
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
            <GitHubIcon />
          </Link>
        </Box>
      </Box>
      <Box display={"div"} className={classes.navbarItems}>
        {navbarItems.map((item, i) => (
          <Typography className={classes.navbarText} key={i}>
            {item}
          </Typography>
        ))}
      </Box>
      <Typography className={classes.title}>SUSTAINABLE</Typography>
      <Typography className={classes.navbarText}>
        © 2028 By Center For Logistics IIT Madras
      </Typography>
    </Container>
  );
};

export default App;
