import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
    sectionTitle: {
      fontSize: "6rem",
      lineHeight: "6rem",
      margin: theme.spacing(2),
      fontWeight: 400,
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
      padding: theme.spacing(5, 2),
      textAlign: "end",
    },
    logoContainer: {
      padding: theme.spacing(5),
      borderTop: "0.1rem solid",
    },
  })
);

const peopleData = [
  {
    left: {
      name: "Nitin Tatiwala",
      designation: "Vice President, Amea Marketing at FedEx",
      image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/nitin.png",
    },
    right: {
      name: "Kami Vishwanathan",
      designation:
        "President - Middle East, Indian Subcontinent and Africa at FedEx",
      image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/kami.jpeg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/fedex-logo.png",
  },
  {
    right: {
      name: "Dr. N.S. Narayanaswamy",
      designation: "Computer Science Department, IIT Madras",
      image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/swamy.jpg",
    },
    left: {
      name: "Dr. Arshinder Kaur",
      designation: "Management Studies Department, IIT Madras",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/ArshinderKaur.jpg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png",
  },
  {
    left: {
      name: "Mahesh Panchagnula",
      designation: "Dean ACR, IIT Madras",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/maheshP.jpg",
    },
    right: {
      name: "V. Kamakoti",
      designation: "Director, IIT Madras",
      image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/kama.jpg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png",
  },
];

const facultyData = [
  {
    left: {
      name: "Dr. Arshinder Kaur",
      designation: "Management Studies - Supply Chain Sustainability",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/ArshinderKaur.jpg",
    },
    right: {
      name: "Dr. Chandrasekharan Rajendran",
      designation: "Management Studies - Supply Chain Sustainability",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/Rajendran.jpg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png",
  },
  {
    left: {
      name: "Dr. Babji Srinivasan",
      designation: "Applied Mechanics - Logistics Worker Wellness",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/babjiSrinivasan.jpg",
    },
    right: {
      name: "Dr. Rajagopalan Srinivasan",
      designation: "Chemical Engineering - Logistics Worker Wellness",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/Rajagopalan.jpg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png",
  },
  {
    left: {
      name: "Dr. B. Ravindran",
      designation: "Computer Science - Algorithms and ML",
      image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/ravi.jpg",
    },
    right: {
      name: "Dr. N.S. Narayanaswamy",
      designation: "Computer Science - Algorithms and ML",
      image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/swamy.jpg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png",
  },
  {
    left: {
      name: "Dr. Gitakrishnan Ramadurai",
      designation: "Civil Engineering - Logistics Infrastructure",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/Ramadurai.jpg",
    },
    right: {
      name: "Satya R Chakravarthy",
      designation: "Aerospace Engineering - Logistics Infrastructure",
      image:
        "https://social-hero.s3.ap-south-1.amazonaws.com/People/Chakravarthy.jpg",
    },
    logo: "https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png",
  },
];

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
      <Typography className={classes.sectionTitle}>Governing Board</Typography>
      {peopleData.map((item, index) => (
        <Grid item container className={classes.root} key={index}>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <img
                className={classes.media}
                src={item.left.image}
                alt="people"
              />
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item className={classes.nameContainerLeft} xs={7}>
              <Typography className={classes.subtitle}>
                {item.right.name}
              </Typography>
              <Typography className={classes.sideText}>
                {item.right.designation}
              </Typography>
              <RightArrow />
            </Grid>
          </Grid>
          <Grid item xs={6} container>
            <Grid item className={classes.nameContainer} xs={6}>
              <Typography className={classes.subtitle}>
                {item.left.name}
              </Typography>
              <Typography className={classes.sideText}>
                {item.left.designation}
              </Typography>
              <LeftArrow />
            </Grid>
            <Grid item xs={6} className={classes.logoContainer}>
              <img src={item.logo} alt="fedex" className={classes.media} />
            </Grid>
            <Grid item xs={12}>
              <img
                className={classes.media}
                src={item.right.image}
                alt="people"
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Typography className={classes.sectionTitle}>Faculty</Typography>
      {facultyData.map((item, index) => (
        <Grid item container className={classes.root} key={index}>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <img
                className={classes.media}
                src={item.left.image}
                alt="people"
              />
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item className={classes.nameContainerLeft} xs={7}>
              <Typography className={classes.subtitle}>
                {item.right.name}
              </Typography>
              <Typography className={classes.sideText}>
                {item.right.designation}
              </Typography>
              <RightArrow />
            </Grid>
          </Grid>
          <Grid item xs={6} container>
            <Grid item className={classes.nameContainer} xs={6}>
              <Typography className={classes.subtitle}>
                {item.left.name}
              </Typography>
              <Typography className={classes.sideText}>
                {item.left.designation}
              </Typography>
              <LeftArrow />
            </Grid>
            <Grid item xs={6} className={classes.logoContainer}>
              <img src={item.logo} alt="fedex" className={classes.media} />
            </Grid>
            <Grid item xs={12}>
              <img
                className={classes.media}
                src={item.right.image}
                alt="people"
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
