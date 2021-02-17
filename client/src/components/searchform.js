import React, { useState } from "react";
import { CircularProgress, Collapse, Container, Grid } from "@material-ui/core";
import {
  LanguageOutlined,
  LibraryBooksOutlined,
  SchoolOutlined,
} from "@material-ui/icons";
import CustomSelect from "./customselect";
import CustomButton from "./customsearch";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { getdbName } from "../utilities";
import { useSnackbar } from "notistack";
import { useHistory, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { page_ } from "../recoil";
import LinearBuffer from "./bufferprogress";

const SearchForm = ({ setcountry, setfield, setlevel }) => {
  const [fieldData, setField] = useState([]);
  const [level, setLevel] = useState([]);
  const [db, setFetch] = useState({ key: "not_found", fetch: false });
  const [dbname, setdbName] = useState(null);
  const [levloading, setlevLoading] = useState(false);
  const [fieldloading, setfieldloading] = useState(false);
  const { handleSubmit, control, reset } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const history = useHistory();
  const location = useLocation();
  const [page, setPage] = useRecoilState(page_);
  const [isloading, setisloading] = useState(false);
  const [enter, setenter] = useState(false);

  const onSubmit = (data) => {
    const { field, level } = data;
    getSchools(field, level, data);
  };

  const getSchools = async (field, level, data) => {
    const post = { dbname, field, level, data, page };
    setisloading(true);
    setTimeout(() => {
      setenter(true);
    }, 1000);
    await axios
      .post("/schools", post)
      .then((response) => {
        setisloading(false);
        setenter(false);
        const [res, totalResults] = response.data.results;
        const state = { ...post, res: res, totalResults: totalResults };

        history.push({
          pathname: "/results",
          state: state,
        });
      })
      .catch((err) => {
        setisloading(false);
        setenter(false);
      });
  };

  return (
    <Container disableGutters>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={3}>
            <Controller
              name="country"
              control={control}
              defaultValue={setcountry || "Select Country"}
              render={({ onChange, onBlur, value, ref }) => {
                let dbJson = getdbName(value);
                let key = dbJson.name;
                if (key !== db.key) setFetch({ key: key, fetch: true });
                if (
                  db.fetch &&
                  value !== "Select Country" &&
                  dbJson.name !== "not_found"
                ) {
                  setfieldloading(true);
                  setlevLoading(true);
                  axios
                    .post("/options", dbJson)
                    .then((res) => {
                      setfieldloading(false);
                      setlevLoading(false);
                      const [dep, lev] = res.data.results;
                      const level = lev.map((item) => item.Type);
                      const departments = dep.map((item) => item.department);
                      setLevel(level);
                      setField(departments);
                    })
                    .catch((err) => {
                      setfieldloading(false);
                      setlevLoading(false);
                      console.log("catch error", err.response);
                    });
                  setFetch({ key: key, fetch: false });
                  setdbName(dbJson);
                }
                return (
                  <CustomSelect
                    onChange={onChange}
                    inputValue={value}
                    inputRef={ref}
                    data={[
                      "Australia",
                      "Belgium",
                      "Canada",
                      "Cyprus",
                      "Czech Republic",
                      "Denmark",
                      "Estonia",
                      "Finland",
                      "France",
                      "Germany",
                      "Greece",
                      "Hungary",
                      "Ireland",
                      "Italy",
                      "Lithuania",
                      "Netherlands",
                      "New Zealand",
                      "Poland",
                      "South Africa",
                      "Spain",
                      "Sweden",
                      "Switzerland",
                      "Turkey",
                      "UAE",
                      "UK",
                      "USA",
                    ]}
                    icon={<LanguageOutlined />}
                    defaultValue="Select Country"
                    defaultValueString="Select Country"
                  />
                );
              }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Controller
              name="field"
              control={control}
              defaultValue={setfield || "Select Field"}
              render={({ onChange, onBlur, value, ref }) => (
                <CustomSelect
                  onChange={onChange}
                  inputValue={value}
                  inputRef={ref}
                  data={fieldData}
                  icon={
                    fieldloading ? (
                      <CircularProgress color="primary" size={30} />
                    ) : (
                      <LibraryBooksOutlined />
                    )
                  }
                  defaultValue={setfield || "Select Field"}
                  defaultValueString={setfield || "Select Field"}
                />
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              name="level"
              control={control}
              defaultValue={setlevel || "Select Level"}
              render={({ onChange, onBlur, value, ref }) => (
                <CustomSelect
                  onChange={onChange}
                  inputValue={value}
                  inputRef={ref}
                  data={level}
                  icon={
                    levloading ? (
                      <CircularProgress color="primary" size={30} />
                    ) : (
                      <SchoolOutlined />
                    )
                  }
                  defaultValue={setlevel || "Select Level"}
                  defaultValueString={setlevel || "Select Level"}
                />
              )}
            />
          </Grid>

          <Grid item xs={6} md={2}>
            <CustomButton type="Submit" />
          </Grid>
        </Grid>
        {isloading && (
          <Grid container justify="center">
            <Grid item xs={12}>
              <Collapse in={enter} timeout="auto">
                <LinearBuffer />
              </Collapse>
            </Grid>
          </Grid>
        )}
      </form>
    </Container>
  );
};

export default SearchForm;
