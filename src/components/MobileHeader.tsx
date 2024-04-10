import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0 0.7rem",
  },
  header: {
    justifyContent: "space-between",
    borderBottom: "0.1rem solid #0B1215",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 50,
  },
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  const navbarItems = ["Home", "About", "People", "Events", "Internships"];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePageNavigation = (page: string) => {
    if (page === "Home") {
      navigate("/");
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
    handleMenuClose();
  };

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.header}>
        <Grid item>
          <img
            src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/Logo.png"
            alt="logo"
            className={classes.media}
          />
        </Grid>
        <Grid item>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {navbarItems.map((item, index) => (
              <MenuItem onClick={() => handlePageNavigation(item)} key={index}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
}
