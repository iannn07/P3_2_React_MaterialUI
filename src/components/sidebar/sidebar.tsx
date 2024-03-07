import React from "react";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";

const navLinks = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: movieIcon,
    link: "/movies",
  },
  {
    name: "TV Series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: bookmarkIcon,
    link: "/bookmarks",
  },
];

// Well in short, this file will handle all of our sidebar navigation
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#222222",
        padding: 2,
        borderRadius: 5,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          justifyContent: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h3"
            component="h1"
            my={2}
            fontWeight={"bold"}
            fontSize={20}
          >
            Squidward Movie App
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "#f1f1f1",
                  textDecoration: "none",
                }}
              >
                {pathname === link.link ? (
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="active-icon"
                  />
                ) : (
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="inactive-icon"
                  />
                )}
                <Hidden mdDown>
                  <Typography>{link.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
