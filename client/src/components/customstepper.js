import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import {
  SchoolOutlined,
  SettingsOutlined,
  ViewDayOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepper: {
    padding: "0",
    backgroundColor: theme.palette.primary.main,
  //  opacity: "0",
  },
}));

function getSteps() {
  return ["/", "/results", "/details"];
}

export default function CustomStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const location = useLocation();
  const history = useHistory();

  const handleStep = (step) => () => {
    setActiveStep(step);
    switch (step) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/results");
        break;
      case 2:
        history.push("/details");
        break;
      default:
        break;
    }
  };

  const getIcon = (index, activeStep) => {
    switch (index) {
      case 0:
        return (
          <SettingsOutlined
            color={activeStep === index ? "secondary" : "disabled"}
            fontSize="large"
          />
        );
      case 1:
        return (
          <ViewDayOutlined
            color={activeStep === index ? "secondary" : "disabled"}
            fontSize="large"
          />
        );
      case 2:
        return (
          <SchoolOutlined
            color={activeStep === index ? "secondary" : "disabled"}
            fontSize="large"
          />
        );
      default:
        break;
    }
  };

  const setLocation = () => {
    const { pathname: url } = location;
    switch (url) {
      case "/":
        setActiveStep(0);
        break;
      case "/results":
        setActiveStep(1);
        break;
      case "/details":
        setActiveStep(2);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    setLocation();
  });
  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepper}
        alternativeLabel
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((label, index) => {
          const stepProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepButton
                icon={getIcon(index, activeStep)}
                onClick={handleStep(index)}
              ></StepButton>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
