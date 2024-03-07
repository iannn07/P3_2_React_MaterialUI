import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({
      type: "TOGGLE BOOKMARK",
      id,
    });
  };
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "transparent",
        color: "#f1f1f1",
        my: 3,
        border: "none",
      }}
    >
      <CardContent
        sx={{
          padding: 0,
          position: "relative",
          borderRadius: "8px",
          backgroundColor: "#222222",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt=""
              style={{
                width: "auto",
                height: "200px",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignContent={"center"} alignItems={"center"}>
              <Grid item>
                <Typography
                  padding={"0 0 0 8px"}
                  fontSize={"10px"}
                  color={"#f1f1f1"}
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#f1f1f1",
                    borderRadius: "100%",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={movie.category === "Movies" ? movieIcon : tvSeriesIcon}
                  alt=""
                  width={16}
                  height={16}
                  style={{
                    filter: "invert(100%)",
                  }}
                />
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#f1f1f1",
                    borderRadius: "100%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={"10px"}
                  color={"#f1f1f1"}
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              padding={"0 0 0 8px"}
              margin={0}
              color={"#f1f1f1"}
              aria-label="movie title"
            >
              {movie.title}
            </Typography>
          </Grid>
          <Box
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                p: "15px",
                backgroundColor: "black",
                borderRadius: "100%",
                "&: hover": { opacity: 0.75 },
              }}
              onClick={() => handleToggleBookmark(movie.id)}
            >
              {movie.isBookmarked ? (
                <>
                  {console.log("Clicked")}
                  <BookmarkIcon fill="#f1f1f1" />
                </>
              ) : (
                <>
                  {console.log("Clicked")}
                  <BookmarkEmptyIcon />
                </>
              )}
            </Box>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
