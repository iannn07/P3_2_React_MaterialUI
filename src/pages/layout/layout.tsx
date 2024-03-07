import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../../components/sidebar/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "#f1f1f1",
        padding: 3,
        gap: 3,
        overflowY: "inherit",
      }}
    >
      <Sidebar></Sidebar>
      <Box sx={{ width: "100%", overflowY: "inherit" }}>
        {children}
        {""}
      </Box>
    </Box>
  );
};

export default Layout;
