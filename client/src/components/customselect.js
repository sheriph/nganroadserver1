import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
} from "@material-ui/core";
import { useRecoilState } from "recoil";
import { country_ } from "../recoil";

const styles = makeStyles((theme) => ({
  root: {
    height: "50px",
  },
}));

const CustomSelect = ({
  onChange,
  inputValue,
  data = [],
  icon = "",
  defaultValue = "",
  defaultValueString = "",
}) => {
  const classes = styles();
  const [country, setCountry] = useRecoilState(country_);
  const countries = ["Australia", "Austria"];
  return (
    <Container disableGutters style={{ margin: "5px 0 5px 0" }}>
      <Paper style={{ height: "50px" }}>
        <Grid container alignItems="center">
          <Grid item container xs={12} alignItems="center">
            <Grid item style={{ marginLeft: "5px", marginRight: "5px" }}>
              {icon}
            </Grid>
            <Grid
              item
              xs
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              <TextField
                fullWidth
                id="standard-select-currency"
                select
                // label="Select"
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  classes: { root: classes.root },
                }}
              >
                <MenuItem value={defaultValue}>
                  <span style={{ color: "#b3b3b3" }}>{defaultValueString}</span>
                </MenuItem>
                {data.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CustomSelect;
