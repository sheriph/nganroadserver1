import React from "react";
import { Container, Grid, InputBase, Paper } from "@material-ui/core";

const CustomInput = ({
  type = "",
  icon = "",
  onChange,
  inputValue,
  inputRef,
}) => {
  return (
    <Container disableGutters style={{ margin: "5px 0 5px 0" }}>
      <Paper style={{ height: "50px" }}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <InputBase
              value={inputValue}
              onChange={(e) => onChange(e.target.value)}
              fullWidth
              style={{ height: "50px" }}
              placeholder={type}
              startAdornment={
                <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                  {icon}
                </span>
              }
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CustomInput;
