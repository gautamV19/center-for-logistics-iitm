import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1),
    },
    title: {
      fontWeight: 450,
      fontSize: "3rem",
      lineHeight: "3rem",
      marginBottom: theme.spacing(2),
      textAlign: "left",
    },
    subtitle: {
      fontSize: "0.75rem",
      lineHeight: "0.78rem",
      width: "80%",
    },
    internInfo: {
      fontSize: "0.75rem",
      lineHeight: "0.78rem",
    },
    subtitle2: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    registerButton: {
      backgroundColor: "#252f22",
      color: "#edf1d6",
      padding: "0.5rem 3.5rem",
      fontSize: "1.1rem",
      borderRadius: 0,
      textTransform: "uppercase",
      width: "fit-content",
      marginTop: theme.spacing(2),
    },
  })
);

const Internship: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Smart and sustainable supply Chains and Logistics
      </Typography>
      <Typography variant="h2" className={classes.subtitle}>
        We are seeking for a talented & motivated applicant for this summer
        internship
      </Typography>
      <Grid item>
        <Typography className={classes.subtitle2}>About</Typography>
        <Typography className={classes.internInfo}>
          There are many openings in domains as Logistics Infrastructure,
          Algorithms & ML for Sustainability, Supply Chain Sustainability and
          Optimization , Analytics & Modelling, Logistics worker wellness. These
          are techincal roles and require good programming and analytical
          capabilities.
        </Typography>
        <Typography className={classes.subtitle2}>Eligibility</Typography>
        <Typography className={classes.internInfo}>
          - Students graduating in 2025 or later
        </Typography>
        <Typography className={classes.internInfo}>
          - Good programming & analytical capabilities
        </Typography>
        <Typography className={classes.subtitle2}>Responsibilities</Typography>
        <Typography className={classes.internInfo}>
          - Work on a research project in the logistics domain
        </Typography>
        <Typography className={classes.internInfo}>
          - Develop a proof of concept for the project
        </Typography>
        <Typography className={classes.subtitle2}>Benefits</Typography>
        <Typography className={classes.internInfo}>
          - Certificate of completion
        </Typography>
        <Typography className={classes.internInfo}>
          - Letter of recommendation
        </Typography>
        <Typography className={classes.internInfo}>
          - Opportunity to work with Top Researchers and Industry Experts
        </Typography>
      </Grid>
      <Button
        className={classes.registerButton}
        onClick={() => {
          window.open("https://forms.gle/9C31LhHXjNG8513H8", "_blank");
        }}
      >
        Apply Now
      </Button>
    </Grid>
  );
};

export default Internship;
