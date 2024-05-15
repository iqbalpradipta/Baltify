import { Box, Button, Stack } from "@mui/material";
import CardUsers from "./CardUsers";
import Menu from "./Menu";
import Playlist from "./Playlist";
import { useState } from "react";

function Sidebar() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <Box sx={{ position: 'fixed', top: '0px', backgroundColor: '#75A47F', borderRadius: '0px 16px 16px 0px', border: '1px solid rgba(137, 133, 126, 0.26)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', width: '27%', minHeight: '640px', MaxHeight: '100%' }} >
        <Box sx={{ p: "30px", width: "70%" }}>
          {isLogin ? <CardUsers />: 
          <>
            <Box gap={2}>
              <Button variant="contained" color="success" sx={{width: '300px', borderRadius: '10px'}}>Login</Button>
              <Button variant="outline" sx={{width: '300px', borderRadius: '10px', mt: '10px', backgroundColor: '#FCFFE0' ,'&:hover': {background: "#BACD92",}}}>Register</Button>
            </Box>
          </>}
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
