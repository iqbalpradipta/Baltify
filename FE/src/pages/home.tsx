import { Box, Divider } from "@mui/material";
import Search from "../components/Search";
import ListAlbum from "../components/ListAlbum";
import ListSong from "../components/ListSong";
import { ToastContainer } from "react-toastify";
import { JWTDecode } from "../hooks/jwtDecode";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import greetings from "../hooks/greetings";

function Home() {
  const token = localStorage.getItem('token')

  const [userData, setUserData] = useState<JwtPayload | null>(null)
  useEffect(() => {
      const data = JWTDecode();
      if(data) {
        setUserData(data)
      }
  }, [])

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FCFFE0",
          minHeight: "100vh",
          maxHeight: "100%",
        }}
      >
        {token ? <Box sx={{ mx: "390px", p: "30px", fontWeight: "Bold", color: "#75A47F" }}>
          {greetings()}, {userData?.payload?.name}
        </Box> :  <Box sx={{ mx: "390px", p: "30px", fontWeight: "Bold", color: "#75A47F" }}>
          {greetings()}, Guest
        </Box> }
        <Box sx={{ mx: "367px", mt: "-40px", p: "30px", fontWeight: "Bold", color: "#75A47F" }}>
          <Search />
        </Box>
        <Box sx={{ mx: "390px", mt: "-30px", p: "30px", fontWeight: "Bold", color: "#75A47F" }}>
          For You
        </Box>
        <Box sx={{ mx: "380px", mt: "-60px", width: "900px" }}>
          <ListAlbum />
        </Box>

        <Box sx={{ mx: "390px", mt: "-70px", p: "30px", fontWeight: "Bold", color: "#75A47F" }}>
          Your Music
        </Box>

        <Box sx={{ mx: "420px", mt: "-20px", width: "900px" }}>
          <ListSong />
        </Box>
      </Box>
        <ToastContainer />
    </>
  );
}

export default Home;
