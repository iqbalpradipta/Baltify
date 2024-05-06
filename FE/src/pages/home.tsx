import { Box, Divider } from "@mui/material";
import Search from "../components/Search";
import ListAlbum from "../components/ListAlbum";

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#BDCDD6",
          height: "640px",
          borderRadius: "16px",
        }}
      >
        <Box sx={{ mx: "390px", p: "30px", fontWeight: "Bold" }}>
          Good Morning, Iqbal Pradipta
        </Box>
        <Box sx={{ mx: "367px", mt: "-40px", p: "30px", fontWeight: "Bold" }}>
          <Search />
        </Box>
        <Box sx={{ mx: "390px", mt: "-30px", p: "30px", fontWeight: "Bold" }}>
          For You
        </Box>
        <Box sx={{ mx: "357px", mt: "-60px", width: "900px" }}>
          <ListAlbum />
        </Box>
      </Box>
    </>
  );
}

export default Home;
