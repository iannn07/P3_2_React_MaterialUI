import React from "react";
import { MovieDataType } from "../../assets/data";
import { Grid, Paper } from "@mui/material";
import MovieCard from "../movie-card/movie";

interface MovieListProps {
  recommendList: MovieDataType[];
}

const MovieList = ({ recommendList }: MovieListProps) => {
  console.log(`The Recommended Movie List are:`, recommendList);
  return (
    <Grid container spacing={2}>
      {recommendList.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
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
    </Grid>
  );
};

export default MovieList;
