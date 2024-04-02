import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    padding: "0 0.9375rem", // 15px converted to rem
    justifyContent: "space-between",
    borderBottom: "0.09375rem solid #0B1215", // 1.5px converted to rem
  },
  logo: {
    height: "3.75rem", // 60px converted to rem
  },
  navbarItems: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.9375rem 0", // 15px converted to rem
  },
  navbarText: {
    color: "#0B1215",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "lighter",
    "&:hover": {
      fontWeight: "bold",
    },
  },
});

const navbarItems = [
  "Home",
  "Vision",
  "About",
  "People",
  "Events",
  "Internships",
];

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handlePageNavigation = (page: string) => {
    if (page === "Home") {
      navigate("/");
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  return (
    <Grid container className={classes.header}>
      <Grid item md={4}>
        <img
          src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/Logo.png"
          alt="logo"
          className={classes.logo}
        />
      </Grid>
      <Grid item container md={8} className={classes.navbarItems}>
        {navbarItems.map((item, i) => (
          <Grid item key={i} onClick={() => handlePageNavigation(item)}>
            <Typography variant="h6" className={classes.navbarText}>
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
