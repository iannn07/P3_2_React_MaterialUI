import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../layout/layout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list/movieList";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const trendingList = movies.filter((movie) => movie.isTrending === true);
  const recommendList = movies.filter((movie) => movie.isTrending !== true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) => {
      movie.title.toLowerCase().includes(search.toLowerCase());
    });
  };
  return (
    <Layout>
      <Box>
        <Paper
          component={"form"}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#222222",
            border: "none",
          }}
        >
          <InputBase
            placeholder={"Search for Movies or TV Series"}
            sx={{ ml: 1, flex: 1, color: "#f1f1f1", border: "none" }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search-icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width={"100%"}>
            <Box width={"100%"}>
              <Typography
                variant="h5"
                component="h1"
                my={6}
                fontWeight={"bold"}
              >
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width={"100%"}>
              <Typography
                variant="h5"
                component="h1"
                my={6}
                fontWeight={"bold"}
              >
                For You
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box width={"100%"}>
            <Typography variant="h3" component="h1" my={6} fontWeight={"bold"}>
              Search Result
            </Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
