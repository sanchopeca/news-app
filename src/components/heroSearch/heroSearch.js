import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import sports from "../../assets/sports.jpg";
import tech from "../../assets/tech.jpg";

const HeroSearch = ({ query, searchHandler, category }) => {
  return (
    <Box
      className="heroSearch"
      sx={{
        height: 300,
        backgroundImage: `url(${category === "sports" ? sports : tech})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="heroSearch__search-box">
        <button className="heroSearch__search-box__btn">
          <FontAwesomeIcon
            className="heroSearch__search-box__icon"
            icon={faSearch}
          />
        </button>
        <input
          className="heroSearch__search-box__input"
          type="text"
          value={query}
          onChange={searchHandler}
          placeholder="Search for news..."
        />
      </div>
    </Box>
  );
};

export default HeroSearch;
