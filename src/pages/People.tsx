import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      width: "100%",
    },
    arrowImage: {
      width: "8rem",
    },
    root: {
      paddingLeft: "0.7rem",
    },
    title: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
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
      borderRight: "0.1rem solid",
      borderLeft: "0.1rem solid",
      borderTop: "0.1rem solid",
    },
    nameContainerLeft: {
      padding: theme.spacing(5),
    },
    logoContainer: {
      padding: theme.spacing(5),
      borderTop: "0.1rem solid",
    },
  })
);

export default function People() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <img
            className={classes.media}
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
      <Grid item container className={classes.root}>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <img
              className={classes.media}
              src="https://social-hero.s3.ap-south-1.amazonaws.com/People/nitin.png"
              alt="people"
            />
          </Grid>
          <Grid item className={classes.nameContainerLeft} xs={6}>
            <Typography className={classes.subtitle}>
              Kami Vishwanathan
            </Typography>
            <Typography className={classes.sideText}>
              President - Middle East, Indian Subcontinent and Africa at FedEx
            </Typography>
            <img
              src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowRight.png"
              alt="left-arrow"
              className={classes.arrowImage}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} container>
          <Grid item className={classes.nameContainer} xs={6}>
            <Typography className={classes.subtitle}>Nitin Tatiwala</Typography>
            <Typography className={classes.sideText}>
              Vice President, Amea Marketing at FedEx
            </Typography>
            <Box>
              <img
                src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowLeft.png"
                alt="left-arrow"
                className={classes.arrowImage}
              />
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.logoContainer}>
            <img
              src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/fedex-logo.png"
              alt="fedex"
              className={classes.media}
            />
          </Grid>
          <Grid item xs={12}>
            <img
              className={classes.media}
              src="https://social-hero.s3.ap-south-1.amazonaws.com/People/kami.jpeg"
              alt="people"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
