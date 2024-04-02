import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7),
    },
    title: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
      marginBottom: theme.spacing(5),
    },
    cardText: {
      marginBottom: theme.spacing(3),
      fontSize: "1.7rem",
      lineHeight: "1.8rem",
    },
    media: {
      height: 220,
    },
    h2text: {
      fontWeight: 400,
      marginBottom: theme.spacing(5),
    },
  })
);

const VisionSecond: React.FC = () => {
  const classes = useStyles();

  const data = [
    {
      img: "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+1.png",
      text: "Measure, Track, and Control Emissions way to net Zero from the logistics sector—environmental sustainability",
    },
    {
      img: "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+2.png",
      text: "Measure, Track & Manage Driver/ Loader Effort towards happiness and safety and reliability—social sustainability",
    },
    {
      img: "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+3.png",
      text: "Decision Making for Sustainability: Algorithmic and ML based Digital transformation for sustainable logistics",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Smart and Sustainable supply chain
      </Typography>
      <Typography variant="h2" className={classes.h2text}>
        Foremost/Leading industry-academia bridge, producing novel technologies
        which will become global standards to
      </Typography>
      <Grid container item spacing={2}>
        {data.map((item, index) => (
          <Grid item key={index} xs={4}>
            <Typography variant="h2" className={classes.cardText}>
              {item.text}
            </Typography>
            <img src={item.img} alt="image" width={"100%"} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VisionSecond;
