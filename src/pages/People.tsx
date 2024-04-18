import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { peopleData, facultyData } from "../assets/textData/people";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titlepic: {
      width: "100%",
      height: "500px",
      marginBottom: "30px",
    },
    subCont: {
      // border: "2px solid",
      // maxWidth: "50%",
    },
    medialogo: {
      width: "300px",
      height: "100px",
      marginTop: "40px",
    },
    firstCont: {
      borderBottom: "2px solid",
      paddingBottom: "20px",
    },
    media: {
      width: "100%",
      marginTop: theme.spacing(2),
      height: "400px",
    },
    arrowImage: {
      width: "8rem",
    },
    root: {
      paddingLeft: "0.7rem",
      paddingRight: "0.7rem",
      // maxHeight: "450px",
    },
    title: {
      fontWeight: 500,
      fontSize: "5rem",
      lineHeight: "6.6rem",
    },
    sectionTitle: {
      fontSize: "4rem",
      lineHeight: "6rem",
      margin: theme.spacing(2),
      fontWeight: 700,
      display: "flex",
      justifyContent: "center",
    },
    subtitle: {
      marginTop: theme.spacing(2),
      fontSize: "2.4rem",
      lineHeight: "3rem",
      marginBottom: theme.spacing(2),
      fontWeight: 400,
    },
    rightContainer: {
      padding: "2rem 1rem",
    },
    sideText: {
      fontSize: "1.2rem",
      lineHeight: "1.3rem",
      marginBottom: theme.spacing(2),
    },
    nameContainer: {
      padding: theme.spacing(5),
      // borderRight: "0.1rem solid",
      // borderLeft: "0.1rem solid",
      // borderTop: "0.1rem solid",
    },
    nameContainerLeft: {
      padding: theme.spacing(5, 2),
      textAlign: "end",
    },
    logoContainer: {
      padding: theme.spacing(5),
      // borderTop: "0.1rem solid",
    },
  })
);

export default function People() {
  const classes = useStyles();

  // const RightArrow = () => (
  //   <img
  //     src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowRight.png"
  //     alt="right-arrow"
  //     className={classes.arrowImage}
  //   />
  // );

  // const LeftArrow = () => (
  //   <img
  //     src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowLeft.png"
  //     alt="left-arrow"
  //     className={classes.arrowImage}
  //   />
  // );

  return (
    <>
      <Box className={classes.firstCont}>
        <Grid container className={classes.root}>
          <Grid item xs={4}>
            <img
              className={classes.titlepic}
              src="https://social-hero.s3.ap-south-1.amazonaws.com/People/people-start.png"
              alt="people"
            />
          </Grid>
          <Grid item className={classes.rightContainer} xs={8}>
            <Typography className={classes.title}>
              Our talented team that made it possible
            </Typography>
            <Typography className={classes.subtitle}>
              A Collaboration of IITM & FedEx
            </Typography>
            <Grid container item xs={8} spacing={2}>
              <Grid item xs={5}>
                <img
                  className={classes.medialogo}
                  src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/fedex-logo.png"
                  alt="fedex"
                ></img>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <img
                  className={classes.medialogo}
                  src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png"
                  alt="iitmlogo"
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.sectionTitle}>Governing Board</Box>

      <Box className={classes.firstCont}>
        <Grid container className={classes.root}>
          {peopleData.map((item, index) => (
            // <Grid container item  key={index}>
            <Grid container item className={classes.subCont} xs={6} key={index}>
              <Grid item xs={6}>
                <img className={classes.media} src={item.image} alt="people" />
              </Grid>
              <Grid item className={classes.nameContainer} xs={6}>
                <Typography className={classes.subtitle}>
                  {item.name}
                </Typography>
                <Typography className={classes.sideText}>
                  {item.designation}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={classes.sectionTitle}>Faculty</Box>

      <Grid container className={classes.root}>
        {facultyData.map((item, index) => (
          // <Grid container className={classes.root} key={index}>
          <Grid container xs={6} key={index}>
            <Grid item xs={6}>
              <img className={classes.media} src={item.image} alt="people" />
            </Grid>
            <Grid item className={classes.nameContainer} xs={6}>
              <Typography className={classes.subtitle}>{item.name}</Typography>
              <Typography className={classes.sideText}>
                {item.designation}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
