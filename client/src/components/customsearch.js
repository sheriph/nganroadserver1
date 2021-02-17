import React from "react";
import {
  ButtonBase,
  Container,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const styles = makeStyles((theme) => ({
  root: {
   // width: "100%",
    height: "100%",
    justifyContent: "left",
    paddingBottom: "6px",
  },
}));

const CustomButton = ({ type }) => {
  const classes = styles();

  return (
    <Container
      disableGutters
      style={{ margin: "5px 0 5px 0", cursor: "pointer" }}
    >
      <Paper style={{ height: "50px", width:"100px" }}>
        <Grid container style={{ height: "50px" }} alignItems="center">
          <Grid item style={{ marginLeft: "5px", marginRight: "5px" }}>
            <SearchOutlined />
          </Grid>
          <Grid item>
            <ButtonBase
              disableRipple
              disableTouchRipple
              classes={{ root: classes.root }}
              type={type}
            >
              SEARCH
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CustomButton;
