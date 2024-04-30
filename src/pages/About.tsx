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
      flexDirection: "column",
    },
    h2text: {
      fontWeight: 400,
      textAlign: "justify",
    },
    h2text2: {
      fontWeight: 400,
      width: "60%",
    },
    textContainer: {
      paddingBottom: theme.spacing(5),
    },
    title: {
      fontWeight: 400,
      fontSize: "4rem",
      lineHeight: "4rem",
    },
    titleContainer: {
      paddingTop: theme.spacing(5),
      width: "80%",
    },
    subtitle: {
      marginBottom: theme.spacing(5),
      width: "80%",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "center",
      margin: "auto",
    },
    listItem: {
      margin: 0,
    },
    leftAlignTextContainer: {
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-end",
      paddingTop: "20px",
    },
    leftAlignText: {
      width: "100%",
    },
    secondContainer: {
      borderTop: "1px solid",
      paddingBottom: theme.spacing(4),
    },
    sideText: {
      fontSize: "1.5rem",
    },
  })
);

const headingData = [
  {
    heading: "Net Zero Carbon Footprint",
    text: [
      "• Framework for Carbon Footprint",
      "• Track, manage, and reduce carbon footprint",
    ],
  },
  {
    heading: "Digital Transformation in Logistics",
    text: [
      "• Integrated logistics management",
      "• Dynamic, predictive and prescriptive analytics",
    ],
  },
  {
    heading: "Industry-specific Applications and Last-mile",
    text: [
      "• New Logistics Mode and Logistics Infrastructure",
      "• Multi-modal logistics - ship, air, road, rail, drone, EV",
    ],
  },
  {
    heading: "Socially Sustainable Logistics",
    text: [
      "• Driver wellness and safety",
      "• Warehouse worker wellness and safety via use of mechanization",
    ],
  },
];

const aboutTextColored2 = [
  {
    text: "Impact - Foremost/Leading industry-academia bridge, producing ",
    color: "#0B1215",
  },
  {
    text: "novel technologies ",
    color: "#609966",
  },
  {
    text: "which will become global",
    color: "#0B1215",
  },
];

const aboutTextColored = [
  { text: "We delve into data, model, and ", color: "#0B1215" },
  { text: "mechanization-driven solutions ", color: "#609966" },
  {
    text: "to make logistics happier and healthier for everyone involved. From ",
    color: "#0B1215",
  },
  {
    text: "industry-specific applications ",
    color: "#609966",
  },
  {
    text: "to digital transformation across multi-modal logistics. We tackle challenges like ",
    color: "#0B1215",
  },
  {
    text: "net-zero carbon footprint",
    color: "#609966",
  },
  {
    text: ", AI and ML in logistics, and ensuring the wellness and safety of logistics workers through ",
    color: "#0B1215",
  },
  {
    text: "innovative technologies ",
    color: "#609966",
  },
  {
    text: "and frameworks.",
    color: "#0B1215",
  },
];

const headingData2 = [
  {
    heading: "Environmental",
    text: [
      "• Measure, Track, and Control Emissions way to net Zero from the logistics sector",
    ],
  },
  {
    heading: "Social",
    text: [
      "• Measure, Track & Manage Driver, Loader, Logistics Stackholder Effort towards safety and reliability",
    ],
  },
  {
    heading: "Digital",
    text: [
      "• Algorithmic and ML based Digital transformation for sustainable logistics",
    ],
  },
];

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.textContainer}>
        {aboutTextColored.map((item, index) => (
          <Typography
            key={index}
            variant="h2"
            style={{ color: item.color, display: "inline" }}
            className={classes.h2text}
          >
            {item.text}
          </Typography>
        ))}
      </Grid>
      {headingData.map((item, index) => (
        <Grid container item key={index} className={classes.secondContainer}>
          <Grid item className={classes.titleContainer}>
            <Typography variant="h1" className={classes.title}>
              {item.heading}
            </Typography>
          </Grid>
          <Grid item container className={classes.leftAlignTextContainer}>
            {item.text.map((text, index) => (
              <React.Fragment key={index}>
                <Grid item className={classes.leftAlignText}>
                  <Typography className={classes.sideText}>{text}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      ))}
      <Grid item className={classes.textContainer} style={{ width: "60%" }}>
        {aboutTextColored2.map((item, index) => (
          <Typography
            key={index}
            variant="h2"
            style={{ color: item.color, display: "inline" }}
            className={classes.h2text2}
          >
            {item.text}
          </Typography>
        ))}
      </Grid>
      {headingData2.map((item, index) => (
        <Grid container item key={index} className={classes.secondContainer}>
          <Grid item className={classes.titleContainer}>
            <Typography variant="h1" className={classes.title}>
              {item.heading}
            </Typography>
          </Grid>
          <Grid item container className={classes.leftAlignTextContainer}>
            {item.text.map((text, index) => (
              <React.Fragment key={index}>
                <Grid item className={classes.leftAlignText}>
                  <Typography className={classes.sideText}>{text}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default About;
