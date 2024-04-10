import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediaLogo: {
      width: "80%",
      margin: "1rem 0",
    },
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1),
    },
    title: {
      fontWeight: 500,
      fontSize: "2.8rem",
      lineHeight: "2.8rem",
      marginBottom: theme.spacing(2),
      textAlign: "left",
    },
    subtitle: {
      fontSize: "1.1rem",
      lineHeight: "1.1rem",
    },
    personName: {
      fontSize: "1.8rem",
      lineHeight: "1.8rem",
      marginTop: theme.spacing(2),
    },
    personDesignation: {
      fontSize: "0.7rem",
    },
    personSite: {
      fontSize: "0.8rem",
      lineHeight: "0.8rem",
      borderBottom: "1px solid",
      display: "inline",
      cursor: "pointer",
      marginTop: theme.spacing(2),
    },
  })
);

const peopleData = [
  {
    name: "Nitin Tatiwala",
    designation: "Vice President, Amea Marketing at FedEx",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/nitin.png",
  },
  {
    name: "Kami Vishwanathan",
    designation:
      "President - Middle East, Indian Subcontinent and Africa at FedEx",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/kami.jpeg",
  },
  {
    name: "Dr. N.S. Narayanaswamy",
    designation: "Computer Science Department, IIT Madras",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/swamy.jpg",
  },
  {
    name: "Dr. Arshinder Kaur",
    designation: "Management Studies Department, IIT Madras",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/ArshinderKaur.jpg",
  },
  {
    name: "Mahesh Panchagnula",
    designation: "Dean ACR, IIT Madras",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/maheshP.jpg",
  },
  {
    name: "V. Kamakoti",
    designation: "Director, IIT Madras",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/kama.jpg",
  },
];
const facultyData = [
  {
    name: "Dr. Arshinder Kaur",
    designation: "Management Studies - Supply Chain Sustainability",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/ArshinderKaur.jpg",
  },
  {
    name: "Dr. Chandrasekharan Rajendran",
    designation: "Management Studies - Supply Chain Sustainability",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/Rajendran.jpg",
  },
  {
    name: "Dr. Babji Srinivasan",
    designation: "Applied Mechanics - Logistics Worker Wellness",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/babjiSrinivasan.jpg",
  },
  {
    name: "Dr. Rajagopalan Srinivasan",
    designation: "Chemical Engineering - Logistics Worker Wellness",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/Rajagopalan.jpg",
  },
  {
    name: "Dr. B. Ravindran",
    designation: "Computer Science - Algorithms and ML",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/ravi.jpg",
  },
  {
    name: "Dr. N.S. Narayanaswamy",
    designation: "Computer Science - Algorithms and ML",
    image: "https://social-hero.s3.ap-south-1.amazonaws.com/People/swamy.jpg",
  },
  {
    name: "Dr. Gitakrishnan Ramadurai",
    designation: "Civil Engineering - Logistics Infrastructure",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/Ramadurai.jpg",
  },
  {
    name: "Satya R Chakravarthy",
    designation: "Aerospace Engineering - Logistics Infrastructure",
    image:
      "https://social-hero.s3.ap-south-1.amazonaws.com/People/Chakravarthy.jpg",
  },
];

export default function People() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography className={classes.title}>
          Our talented team that made it possible
        </Typography>
        <Typography className={classes.subtitle}>
          A Collaboration of IITM & FedEx
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/iitmlogo.png"
          alt="fedex"
          className={classes.mediaLogo}
        />
      </Grid>
      <Grid item xs={6}>
        <img
          src="https://social-hero.s3.ap-south-1.amazonaws.com/logo/fedex-logo.png"
          alt="fedex"
          className={classes.mediaLogo}
        />
      </Grid>
      <Grid item container>
        <Typography variant="h2">Governing Board</Typography>
        {peopleData.map((person, index) => (
          <Grid item container xs={12} key={index} style={{ margin: "20px 0" }}>
            <Grid item xs={12} sm={6}>
              <img src={person.image} alt={person.name} width={"100%"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.personName}>
                {person.name}
              </Typography>
              <Typography className={classes.personDesignation}>
                {person.designation}
              </Typography>
              <Typography className={classes.personSite}>
                Visit Site →
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item container>
        <Typography variant="h2">Faculty Members</Typography>
        {facultyData.map((person, index) => (
          <Grid item container xs={12} key={index} style={{ margin: "20px 0" }}>
            <Grid item xs={12} sm={6}>
              <img src={person.image} alt={person.name} width={"100%"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.personName}>
                {person.name}
              </Typography>
              <Typography className={classes.personDesignation}>
                {person.designation}
              </Typography>
              <Typography className={classes.personSite}>
                Visit Site →
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
