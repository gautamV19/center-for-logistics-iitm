/* src/components/Landing.tsx */
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, List, ListItem, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  title: {
    fontWeight: 400,
    fontSize: "6.6rem",
    lineHeight: "6.7rem",
    marginBottom: theme.spacing(3),
    textAlign: "left",
  },
  subtitle: {
    marginBottom: theme.spacing(5),
    width: "65%",
    fontSize: "1.7rem",
    lineHeight: "1.7rem",
    textAlign: "justify",
  },
  listItem: {
    borderTop: "2px solid",
    padding: theme.spacing(2, 0),
  },
  listItem2: {
    borderTop: "2px solid",
    borderBottom: "2px solid",
    padding: theme.spacing(2, 0),
  },
  listText: {
    fontWeight: 400,
  },
}));

const Landing: React.FC = () => {
  const classes = useStyles();

  const visionItems = [
    "Net Zero Carbon Footprint",
    "Digital Transformation in Multi-modal Logistics",
    "Industry-specific Applications",
    "Healthier Drivers and Warehouse Workers",
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Our Vision
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Our vision is to build a center which fosters innovation and enables
        environmental and social sustainability in logistics and supply chains
        with cutting-edge digital transformation technologies.
      </Typography>
      <List>
        {visionItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              className={
                index != 3 ? `${classes.listItem}` : `${classes.listItem2}`
              }
            >
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h2" className={classes.listText}>
                    {item}
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src="https://social-hero.s3.ap-south-1.amazonaws.com/Icons/Arrow+1.svg"
                    height="35px"
                  />
                </Grid>
              </Grid>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Landing;
