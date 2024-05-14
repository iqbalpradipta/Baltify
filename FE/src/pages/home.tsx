import { Box, Divider } from "@mui/material";
import Search from "../components/Search";
import ListAlbum from "../components/ListAlbum";
import ListSong from "../components/ListSong";

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F8F4EC",
          minHeight: "100vh",
          maxHeight: "100%",
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
        <Box sx={{ mx: "380px", mt: "-60px", width: "900px" }}>
          <ListAlbum />
        </Box>

        <Box sx={{ mx: "390px", mt: "-70px", p: "30px", fontWeight: "Bold" }}>
          Your Music
        </Box>

        <Box sx={{ mx: "420px", mt: "-20px", width: "900px" }}>
          <ListSong />
        </Box>

      </Box>
    </>
  );
}

export default Home;
