import { Container, Grid, Paper, Typography } from "@material-ui/core";
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

const Details = () => {
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
    <Container>
      <Grid container justify="center" style={{ margin: "10px 0 10px 0" }}>
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
      <Grid container component={Paper} style={{ margin: "10px 0 10px 0" }}>
        {department && (
          <Grid item xs={12} sm={6}>
            <AvatarList
              primaryText={department}
              secondaryText="Department"
              listChildren={<HomeWorkOutlined fontSize="small" />}
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
              }}
            />
          </Grid>
        )}
        {duration && (
          <Grid item xs={12} sm={6}>
            <AvatarList
              primaryText={duration}
              secondaryText="Duration of Study"
              listChildren={<AccessTimeOutlined fontSize="small" />}
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
              }}
            />
          </Grid>
        )}
        {type && (
          <Grid item xs={12} sm={6}>
            <AvatarList
              primaryText={type}
              secondaryText="Level of Study"
              listChildren={<BookmarkBorderOutlined fontSize="small" />}
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
              }}
            />
          </Grid>
        )}
        {place && (
          <Grid item xs={12} sm={6}>
            <AvatarList
              primaryText={place}
              secondaryText="Place of Study"
              listChildren={<LocationOnOutlined fontSize="small" />}
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
              }}
            />
          </Grid>
        )}
        {mode && (
          <Grid item xs={12} sm={6}>
            <AvatarList
              primaryText={mode}
              secondaryText="Mode of Study"
              listChildren={<LanguageOutlined fontSize="small" />}
              avatarStyle={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
              }}
            />
          </Grid>
        )}
        {program_url && (
          <Grid item xs={12} sm={6}>
            <a target="_blank" rel="noreferrer" href={program_url}>
              <AvatarList
                primaryText="Official Website"
                secondaryText="Click here"
                listChildren={<LanguageOutlined fontSize="small" />}
                avatarStyle={{
                  width: "30px",
                  height: "30px",
                  marginRight: "5px",
                }}
              />
            </a>
          </Grid>
        )}
      </Grid>
      {description && (
        <Grid
          container
          component={Paper}
          style={{ margin: "10px 0 10px 0", padding: "10px" }}
        >
          <Grid item xs={12}>
            <Typography align="center">Program Description</Typography>
          </Grid>
          <Grid item>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Grid>
        </Grid>
      )}
      {content && (
        <Grid
          container
          component={Paper}
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
          component={Paper}
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
          component={Paper}
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
