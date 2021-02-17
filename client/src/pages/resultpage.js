import {
  Collapse,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import LinearBuffer from "../components/bufferprogress";
import ResultCard from "../components/resultcard";
import SearchForm from "../components/searchform";

const ResultPage = () => {
  // const [data, setData] = useState([1, 2, 3]);
  const history = useHistory();
  const location = useLocation();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [country, setcountry] = useState(null);
  const [field, setfield] = useState(null);
  const [level, setlevel] = useState(null);
  const [results, setresults] = useState(null);
  const [state, setstate] = useState();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isloading, setisloading] = useState(false);
  const [enter, setenter] = useState(false);

  useEffect(() => {
    if (location.state) {
      window.localStorage.setItem("location", JSON.stringify(location));
      const {
        state: {
          res: results,
          data: { country, field, level },
          page,
          totalResults,
        },
      } = location;
      setcountry(country);
      setfield(field);
      setlevel(level);
      setresults(results);
      setPage(page);
      setstate(location.state);
      const count = Math.ceil(totalResults[0]["COUNT(*)"] / 20);
      setCount(count);
      setisloading(false);
      setenter(false);
    } else if (
      !location.state &&
      JSON.parse(window.localStorage.getItem("location"))
    ) {
      const location = JSON.parse(window.localStorage.getItem("location"));
      const {
        state: {
          res: results,
          data: { country, field, level },
          page,
          totalResults,
        },
      } = location;

      setcountry(country);
      setfield(field);
      setlevel(level);
      setresults(results);
      setstate(location.state);
      setPage(page);
      const count = Math.ceil(totalResults[0]["COUNT(*)"] / 20);
      setCount(count);
      setisloading(false);
      setenter(false);
    } else {
      enqueueSnackbar("Redirecting to search form", {
        variant: "success",
      });
      enqueueSnackbar("Ouch!!! You do not have a search result on record ", {
        variant: "error",
      });
      setTimeout(() => {
        history.push("/");
      }, 6000);
    }
  }, []);

  if (!results || !country || !field || !level)
    return (
      <Container>
        <Skeleton variant="rect" width="100%" height={500} />
      </Container>
    );

  const gotToDetails = (result) => {
    history.push({
      pathname: "/details",
      state: { details: result, ...state },
    });
  };

  const getSchools = async (p) => {
    let prevState = { ...state, res: null };
    prevState.page = p;
    setisloading(true);
    setTimeout(() => {
      setenter(true);
    }, 1000);
    await axios
      .post("/schools", prevState)
      .then((response) => {
        setisloading(false);
        setenter(false);
        const [res, totalResults] = response.data.results;
        const state = { ...prevState, res: res, totalResults: totalResults };

        history.replace({
          pathname: "/results",
          state: state,
        });
      })
      .catch((err) => {
        setisloading(false);
        setenter(false);
        console.log("catch error", err.response, err);
      });
  };

  const goNextPage = (e, p) => {
    getSchools(p);
  };

  return (
    <Container style={{ backgroundColor: "#efefef" }}>
      <Grid container justify="center">
        <Grid item>
          <SearchForm setcountry={country} setfield={field} setlevel={level} />
        </Grid>
        {results.length === 0 ? (
          <Container>
            <Grid
              container
              style={{ height: "500px", width: "100%" }}
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item>
                <Typography align="center" variant="h4">
                  No Results Found. Try a New Search
                </Typography>
              </Grid>
            </Grid>
          </Container>
        ) : (
          results.map((result, index) => (
            <Grid
              onClick={() => gotToDetails(result)}
              item
              xs={12}
              style={{ margin: "10px 0 10px 0" }}
              key={index}
            >
              <ResultCard result={result} />
            </Grid>
          ))
        )}
      </Grid>

      {count > 1 && (
        <Grid container justify="center" spacing={2}>
          {isloading && (
            <Grid item xs={12}>
              <Collapse in={enter} timeout="auto">
                <LinearBuffer />
              </Collapse>
            </Grid>
          )}
          <Grid item xs={12}>
            <Pagination
              onChange={(e, p) => goNextPage(e, p)}
              color="primary"
              count={count}
              page={page}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ResultPage;
