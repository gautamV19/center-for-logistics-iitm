import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1),
    },
    textContainer: {
      paddingBottom: theme.spacing(2),
      borderBottom: "0.7px solid",
    },
    startText: {
      fontSize: "1.2rem",
      lineHeight: "1.2rem",
      textAlign: "justify",
    },
    sectionContainer: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3, 0),
      borderBottom: "0.7px solid",
    },
    sectionTitle: {
      fontSize: "2.3rem",
      lineHeight: "2.3rem",
      textAlign: "left",
      paddingBottom: theme.spacing(2),
    },
    sectionSubTitle: {
      fontSize: "0.8rem",
      lineHeight: "0.7rem",
      textAlign: "left",
      paddingLeft: theme.spacing(1),
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

const MobileAbout: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.textContainer}>
        {aboutTextColored.map((item, index) => (
          <Typography
            key={index}
            style={{ color: item.color, display: "inline" }}
            className={classes.startText}
          >
            {item.text}
          </Typography>
        ))}
      </Grid>
      {headingData.map((item, index) => (
        <Grid item className={classes.sectionContainer} key={index}>
          <Typography className={classes.sectionTitle}>
            {item.heading}
          </Typography>
          {item.text.map((text, index) => (
            <Typography key={index} className={classes.sectionSubTitle}>
              {text}
            </Typography>
          ))}
        </Grid>
      ))}
      <Grid item className={classes.sectionContainer}>
        {aboutTextColored2.map((item, index) => (
          <Typography
            key={index}
            style={{ color: item.color, display: "inline" }}
            className={classes.startText}
          >
            {item.text}
          </Typography>
        ))}
      </Grid>
      {headingData2.map((item, index) => (
        <Grid item className={classes.sectionContainer} key={index}>
          <Typography className={classes.sectionTitle}>
            {item.heading}
          </Typography>
          {item.text.map((text, index) => (
            <Typography key={index} className={classes.sectionSubTitle}>
              {text}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};
export default MobileAbout;
