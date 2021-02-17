import {
  Button,
  ButtonBase,
  Container,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {
  BookmarkBorderOutlined,
  LanguageOutlined,
  LocationOnOutlined,
  ScheduleOutlined,
  SchoolOutlined,
} from "@material-ui/icons";
import React from "react";
import AvatarList from "./avatarlist";

const styles = makeStyles((theme) => ({
  avatar: {
    width: "50px",
    height: "50px",
  },
}));

const ResultCard = ({ result }) => {
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
    title: course,
    title1: schoolName,
    title_url,
    tuition,
    type: level,
  } = result;
  return (
    <>
      <Container disableGutters style={{ padding: "1px" }}>
        <Paper style={{ cursor: "pointer" }}>
          <Grid container justify="center">
            <AvatarList
              primaryText={course}
              secondaryText={schoolName}
              imgSrc={logo}
              avatarStyle={{
                width: "60px",
                height: "60px",
                marginRight: "5px",
              }}
              listChildren={<SchoolOutlined />}
              variant="rounded"
            />
            {/* <Grid item>
              <IconButton
                centerRipple
                style={{ fontWeight: "bold" }}
                component={Button}
                startIcon={<LocalLibraryOutlined color="primary" />}
              >
                {course}
              </IconButton>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item>
              <ButtonBase
                centerRipple
                style={{ fontWeight: "bold" }}
                component={Button}
                startIcon={<SchoolOutlined color="primary" />}
              >
                {schoolName}
              </ButtonBase>
            </Grid> */}
          </Grid>
          <Grid container>
            <Grid item>
              <ButtonBase
                centerRipple
                style={{ textTransform: "none" }}
                component={Button}
                startIcon={<BookmarkBorderOutlined color="primary" />}
              >
                {level}
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase
                centerRipple
                style={{ textTransform: "none" }}
                component={Button}
                startIcon={<LocationOnOutlined color="primary" />}
              >
                {place}
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase
                centerRipple
                style={{ textTransform: "none" }}
                component={Button}
                startIcon={<ScheduleOutlined color="primary" />}
              >
                {duration}
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase
                centerRipple
                style={{ textTransform: "none" }}
                component={Button}
                startIcon={<LanguageOutlined color="primary" />}
              >
                {mode}
              </ButtonBase>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default ResultCard;
