import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";

interface MovieTrendCardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({
      type: "TOGGLE BOOKMARK",
      id,
    });
  };
  
  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "#transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{
            width: "300px",
            height: "100%",
            // borderRadius: "8px",
          }}
        />
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          bgcolor={"rgba(0,0,0,0.5)"}
          //   borderRadius={"6px"}
        />
        <Stack
          mt={6}
          spacing={0}
          position={"absolute"}
          right={0}
          bottom={0}
          left={0}
          p={4}
        >
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item>
              <Typography
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
                  width: "1rem",
                  height: "1rem",
                  bg: "#f1f1f1",
                  borderRadius: "full",
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
              <Typography
                fontSize={"10px"}
                color={"#f1f1f1"}
                aria-label="movie category"
              >
                {movie.category}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#f1f1f1",
                  borderRadius: "full",
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
          <Typography padding={0} color={"#f1f1f1"} aria-label="movie title">
            {movie.title}
          </Typography>
        </Stack>
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
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
