import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import SearchForm from "../components/searchform";
import { useLocation } from "react-router-dom";

const HomePage = () => {
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
    <Container
      style={{ backgroundColor: "#efefef" }}
      maxWidth={false}
      disableGutters
    >
      <img
        src="../images/schoolbackgroung.jpg"
        alt="topimage"
        width="100%"
        height="350px"
      />
      <Container>
        <SearchForm setcountry={country} setfield={field} setlevel={level} />
      </Container>
    </Container>
  );
};

export default HomePage;
