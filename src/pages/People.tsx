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
    firstCont: {
      borderBottom: "2px solid",
      paddingBottom: "20px",
    },
    media: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
    arrowImage: {
      width: "8rem",
    },
    root: {
      paddingLeft: "0.7rem",
    },
    title: {
      fontWeight: 400,
      fontSize: "5rem",
      lineHeight: "6.6rem",
    },
    sectionTitle: {
      fontSize: "4rem",
      lineHeight: "6rem",
      margin: theme.spacing(2),
      fontWeight: 700,
      marginLeft: "500px",
    },
    subtitle: {
      marginTop: theme.spacing(2),
      fontSize: "3rem",
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

  const RightArrow = () => (
    <img
      src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowRight.png"
      alt="right-arrow"
      className={classes.arrowImage}
    />
  );

  const LeftArrow = () => (
    <img
      src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowLeft.png"
      alt="left-arrow"
      className={classes.arrowImage}
    />
  );

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
          </Grid>
        </Grid>
      </Box>
      <Typography className={classes.sectionTitle}>Governing Board</Typography>
      <Box className={classes.firstCont}>
        {peopleData.map((item, index) => (
          <Grid container>
            <Grid container className={classes.root} key={index}>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                <img
                  className={classes.media}
                  src={item.left.image}
                  alt="people"
                />
              </Grid>
              <Grid item className={classes.nameContainer} xs={3}>
                <Typography className={classes.subtitle}>
                  {item.left.name}
                </Typography>
                <Typography className={classes.sideText}>
                  {item.left.designation}
                </Typography>
                <LeftArrow />
              </Grid>
              <Grid item xs={1}></Grid>
              {index == 2 ? (
                <Grid item xs={3}></Grid>
              ) : (
                <Grid item xs={3} className={classes.logoContainer}>
                  <img src={item.logo} alt="fedex" className={classes.media} />
                </Grid>
              )}
            </Grid>
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid item className={classes.nameContainerLeft} xs={3}>
                <Typography className={classes.subtitle}>
                  {item.right.name}
                </Typography>
                <Typography className={classes.sideText}>
                  {item.right.designation}
                </Typography>
                <RightArrow />
              </Grid>
              <Grid item xs={3}>
                <img
                  className={classes.media}
                  src={item.right.image}
                  alt="people"
                />
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Typography className={classes.sectionTitle}>Faculty</Typography>
      {facultyData.map((item, index) => (
        <Grid item container className={classes.root} key={index}>
          <Grid container item xs={2}></Grid>
          <Grid item xs={3}>
            <img className={classes.media} src={item.left.image} alt="people" />
          </Grid>
          <Grid item className={classes.nameContainer} xs={3}>
            <Typography className={classes.subtitle}>
              {item.left.name}
            </Typography>
            <Typography className={classes.sideText}>
              {item.left.designation}
            </Typography>
            <LeftArrow />
          </Grid>
          <Grid container item xs={1}></Grid>
          {index == 0 ? (
            <Grid item xs={3} className={classes.logoContainer}>
              <img src={item.logo} alt="fedex" className={classes.media} />
            </Grid>
          ) : (
            <Grid item xs={3} />
          )}

          <Grid container item xs={4}></Grid>
          <Grid item className={classes.nameContainerLeft} xs={3}>
            <Typography className={classes.subtitle}>
              {item.right.name}
            </Typography>
            <Typography className={classes.sideText}>
              {item.right.designation}
            </Typography>
            <RightArrow />
          </Grid>

          <Grid item xs={3}>
            <img
              className={classes.media}
              src={item.right.image}
              alt="people"
            />
          </Grid>
          <Grid item xs={2} container></Grid>
        </Grid>
      ))}
    </>
  );
}
