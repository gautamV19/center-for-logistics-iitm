import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      width: "100%",
    },
    arrowImage: {
      marginTop: theme.spacing(5),
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
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <img
            className={classes.media}
            src="https://social-hero.s3.ap-south-1.amazonaws.com/People/nitin.png"
            alt="people"
          />
        </Grid>
        <Grid item className={classes.nameContainer} xs={3}>
          <Typography className={classes.subtitle}>Nitin Tatiwala</Typography>
          <Typography className={classes.sideText}>
            Vice President, Amea Marketing at FedEx
          </Typography>
          <Box
            style={{
              borderBottom: "0.1rem solid",
              width: "fit-content",
              cursor: "pointer",
            }}
          >
            <Typography className={classes.sideText} display="inline">
              Visit Site
            </Typography>
            <ArrowRightAltIcon
              sx={{ fontSize: "1.2rem", verticalAlign: "middle" }}
            />
          </Box>
          <Box>
            <img
              src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/ArrowLeft.png"
              alt="left-arrow"
              className={classes.arrowImage}
            />
          </Box>
        </Grid>
        <Grid item xs={3} className={classes.logoContainer}>
          <img
            src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/fedex-logo.png"
            alt="fedex"
            className={classes.media}
          />
        </Grid>
      </Grid>
    </>
  );
}
