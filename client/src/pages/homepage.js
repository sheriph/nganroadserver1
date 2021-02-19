import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import SearchForm from "../components/searchform";
import { useLocation } from "react-router-dom";

const styles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
  },
  quoteBlock: {
    borderRight: "15px solid",
    borderRightColor: theme.palette.primary.main,
  },
}));

const HomePage = () => {
  const classes = styles();
  const [country, setcountry] = useState(null);
  const [field, setfield] = useState(null);
  const [level, setlevel] = useState(null);
  const location = useLocation();
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (location.state) {
      window.localStorage.setItem("location", JSON.stringify(location));
      const {
        state: {
          data: { country, field, level },
        },
      } = location;
      setcountry(country);
      setfield(field);
      setlevel(level);
      setmounted(true);
    } else if (
      !location.state &&
      JSON.parse(window.localStorage.getItem("location"))
    ) {
      const location = JSON.parse(window.localStorage.getItem("location"));
      const {
        state: {
          data: { country, field, level },
        },
      } = location;

      setcountry(country);
      setfield(field);
      setlevel(level);
      setmounted(true);
    }
    setmounted(true);
  }, []);

  if (!mounted) return <>loading</>;
  return (
    <Container disableGutters style={{ margin: "0" }}>
      <Grid
        component={Container}
        container
        className={classes.background}
        justify="center"
        style={{ marginTop: "-1px" }}
      >
        <Grid
          item
          xs
          style={{
            maxWidth: "max-content",
            marginBottom: "50px",
            marginTop: "10px",
            color: "white",
          }}
        >
          <Typography variant="caption" align="left" gutterBottom>
            want to study abroad ?
          </Typography>
          <Typography variant="h5" align="center">
            Find Schools and Courses Below
          </Typography>
        </Grid>
      </Grid>
      <Grid
        component={Container}
        item
        xs={12}
        className={classes.background}
        style={{ paddingBottom: "40px" }}
      >
        <SearchForm setcountry={country} setfield={field} setlevel={level} />
      </Grid>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        style={{ margin: "40px 0 20px 0" }}
        className={classes.quoteBlock}
      >
        <Grid item component={Container} xs="auto" sm={9}>
          <img
            src="../images/studyabroad.jpg"
            alt="studyImage"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid
          item
          xs="auto"
          sm={3}
          component={Container}
          style={{ padding: "20px" }}
        >
          <Typography>
            Finding schools and courses abroad have never been easier.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
