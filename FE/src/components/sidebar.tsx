import { Box, Stack } from "@mui/material";
import CardUsers from "./CardUsers";
import Menu from "./Menu";
import Playlist from "./Playlist";

function Sidebar() {
  return (
    <>
      <Box sx={{ position: 'fixed', top: '0px', backgroundColor: '#6096B4', borderRadius: '16px', border: '1px solid rgba(137, 133, 126, 0.26)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', width: '27%', height: '640px' }} >
        <Box sx={{ p: "30px", width: "70%" }}>
          <CardUsers />
        </Box>

        <Box mt="10px">
          <Menu />
        </Box>

        <Box mt="10px">
          <Playlist />
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
