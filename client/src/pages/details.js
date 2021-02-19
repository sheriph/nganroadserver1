import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  AccessTimeOutlined,
  BookmarkBorderOutlined,
  HomeWorkOutlined,
  LanguageOutlined,
  LocationOnOutlined,
  SchoolOutlined,
} from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AvatarList from "../components/avatarlist";

const styles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
  },
  grey: {
    background: theme.palette.grey[300],
  },
}));

const Details = () => {
  const classes = styles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const location = useLocation();
  const history = useHistory();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (location.state && location.state.details) {
      setDetails(location.state.details);
    } else {
      enqueueSnackbar("Please Select an Item Prom Program List", {
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

  if (!details)
    return (
      <Container>
        <Skeleton variant="rect" width="100%" height={500} />
      </Container>
    );

  const {
    admission_requirement,
    content,
    data_field,
    department,
    description,
    description2,
    duration,
    logo,
    mode,
    place,
    program_url,
    title,
    title1,
    title_url,
    tuition,
    type,
  } = details;
  return (
    <Container disableGutters>
      <Grid
        component={Container}
        className={classes.background}
        container
        justify="center"
        style={{
          margin: "-1px 0 0px 0",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Grid item component={Paper}>
          <AvatarList
            primaryText={title}
            secondaryText={title1}
            listChildren={<SchoolOutlined />}
            imgSrc={logo}
            avatarStyle={{ width: "60px", height: "60px", marginRight: "5px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grey}
        component={Container}
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        {department && (
          <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <AvatarList
              primaryText={department}
              secondaryText="Department"
              listChildren={
                <HomeWorkOutlined color="primary" fontSize="small" />
              }
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                backgroundColor: "white",
              }}
            />
          </Grid>
        )}
        {duration && (
          <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <AvatarList
              primaryText={duration}
              secondaryText="Duration of Study"
              listChildren={
                <AccessTimeOutlined color="primary" fontSize="small" />
              }
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                backgroundColor: "white",
              }}
            />
          </Grid>
        )}
        {type && (
          <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <AvatarList
              primaryText={type}
              secondaryText="Level of Study"
              listChildren={
                <BookmarkBorderOutlined color="primary" fontSize="small" />
              }
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                backgroundColor: "white",
              }}
            />
          </Grid>
        )}
        {place && (
          <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <AvatarList
              primaryText={place}
              secondaryText="Place of Study"
              listChildren={
                <LocationOnOutlined color="primary" fontSize="small" />
              }
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                backgroundColor: "white",
              }}
            />
          </Grid>
        )}
        {mode && (
          <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <AvatarList
              primaryText={mode}
              secondaryText="Mode of Study"
              listChildren={
                <LanguageOutlined color="primary" fontSize="small" />
              }
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                backgroundColor: "white",
              }}
            />
          </Grid>
        )}
        {program_url && (
          <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <a target="_blank" rel="noreferrer" href={program_url}>
              <AvatarList
                primaryText="Official Website"
                secondaryText="Click here"
                listChildren={
                  <LanguageOutlined color="primary" fontSize="small" />
                }
                avatarStyle={{
                  width: "30px",
                  height: "30px",
                  marginRight: "5px",
                  backgroundColor: "white",
                }}
              />
            </a>
          </Grid>
        )}
      </Grid>
      {description && (
        <Grid
          container
          component={Container}
          style={{ margin: "10px 0 10px 0", padding: "10px" }}
        >
          <Grid item xs={12}>
            <Typography align="center">Program Description</Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Grid>
        </Grid>
      )}
      {content && (
        <Grid
          container
          component={Container}
          style={{ margin: "10px 0 10px 0", padding: "10px" }}
        >
          <Grid item xs={12}>
            <Typography align="center">Program Contents</Typography>
          </Grid>
          <Grid item>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
      )}
      {tuition && (
        <Grid
          container
          component={Container}
          style={{ margin: "10px 0 10px 0", padding: "10px" }}
        >
          <Grid item xs={12}>
            <Typography align="center">Tuition Fees</Typography>
          </Grid>
          <Grid item>
            <div dangerouslySetInnerHTML={{ __html: tuition }} />
          </Grid>
        </Grid>
      )}
      {admission_requirement && (
        <Grid
          container
          component={Container}
          style={{ margin: "10px 0 30px 0", padding: "10px" }}
        >
          <Grid item xs={12}>
            <Typography align="center">Admission Requirements</Typography>
          </Grid>
          <Grid item>
            <div dangerouslySetInnerHTML={{ __html: admission_requirement }} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Details;
