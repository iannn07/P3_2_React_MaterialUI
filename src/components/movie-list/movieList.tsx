import React from "react";
import { MovieDataType } from "../../assets/data";
import { Box, Grid, Paper } from "@mui/material";
import MovieCard from "../movie-card/movie";

interface MovieListProps {
  recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {
  console.log(`The Recommended Movie List are:`, recommendList);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
      }}
    >
      {recommendList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#222222",
            }}
          >
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieList;
