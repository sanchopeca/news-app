import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useContext,
} from "react";
import useNewsSearch from "../../hooks/useNewsSearch";
import NewsItem from "./newsItem/newsItem";
import { ThemeContext } from "../../contexts/ThemeContext";
import Spinner from "../UI/Spinner/Spinner";
import HeroSearch from "../heroSearch/heroSearch";
import {
  Grid,
  Container,
  Tabs,
  Tab,
  Fab,
  Alert,
  AlertTitle,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Select from "@mui/material/Select";
import MaterialUISwitch from "../UI/Switch/Switch";

const News = () => {
  const [query, setQuery] = useState("");
  const [newsUpdate, setNewsUpdate] = useState(0);
  const [category, setCategory] = useState("sports");
  const [dateFilter, setDateFilter] = useState("published_desc");
  const [isVisible, setIsVisible] = useState(false);

  const { news, hasMore, loading, error } = useNewsSearch(
    query,
    newsUpdate,
    category,
    dateFilter
  );

  const { theme, toggleTheme } = useContext(ThemeContext);

  const observer = useRef();

  const lastTitleElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting > 0 && hasMore) {
          setNewsUpdate((prevNewsUpdate) => prevNewsUpdate + 9);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const searchHandler = (e) => {
    setQuery(e.target.value);
    setNewsUpdate(0);
  };

  const categoryTabHandler = (_, value) => {
    setCategory(value);
    setNewsUpdate(0);
  };

  const sortByDateHandler = (_, value) => {
    setDateFilter(value.props.value);
    setNewsUpdate(0);
  };

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <React.Fragment>
      <HeroSearch
        query={query}
        searchHandler={searchHandler}
        category={category}
      />
      <Container maxWidth="lg" align="center">
        <Grid
          container
          sx={{
            minWidth: 120,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Tabs
              value={category}
              onChange={categoryTabHandler}
              centered
              sx={{ margin: "25px" }}
            >
              <Tab value="sports" label="Sports" />
              <Tab value="technology" label="Technology" />
            </Tabs>
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <FormControl sx={{ margin: "25px" }}>
              <InputLabel id="demo-simple-select-label">
                Sort by Date
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dateFilter}
                label="Sort by Date"
                onChange={sortByDateHandler}
              >
                <MenuItem value="published_desc">Newest</MenuItem>
                <MenuItem value="published_asc">Oldest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <MaterialUISwitch
              sx={{ margin: "25px" }}
              value={theme}
              onChange={toggleTheme}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {news.map((n, index) => {
            if (news.length === index + 1) {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  ref={lastTitleElementRef}
                  key={uuidv4()}
                >
                  <NewsItem
                    title={n.title}
                    description={n.description}
                    author={n.author}
                    published={n.published}
                    image={n.image}
                    url={n.url}
                  />
                </Grid>
              );
            } else
              return (
                <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
                  <NewsItem
                    title={n.title}
                    description={n.description}
                    author={n.author}
                    published={n.published}
                    image={n.image}
                    url={n.url}
                  />
                </Grid>
              );
          })}
          {loading && (
            <Spinner sx={{ margin: "auto", marginBottom: "100px" }} />
          )}

          {error && (
            <Alert
              severity="error"
              sx={{ margin: "auto", marginBottom: "100px" }}
            >
              <AlertTitle>Error</AlertTitle>
              <strong>Oops! </strong>
              Something went wrong.
            </Alert>
          )}

          {isVisible && (
            <Fab
              color="primary"
              aria-label="back to top"
              sx={{
                margin: "0",
                top: "auto",
                right: "10%",
                bottom: 20,
                left: "auto",
                position: "fixed",
              }}
              onClick={scrollToTopHandler}
            >
              <ArrowCircleUpIcon />
            </Fab>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default News;
