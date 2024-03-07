import React from "react";
import { MovieDataType } from "../../assets/data";
import { Box, Grid, Paper } from "@mui/material";
import MovieTrendCard from "../movie-card/movieTrend";

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  console.log(`The Trending Movie List are:`, trendingList);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
      }}
    >
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#222222",
            }}
          >
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
