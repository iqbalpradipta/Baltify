import { BsStack } from "react-icons/bs";
import { IoIosAlbums, IoIosMusicalNotes } from "react-icons/io";
import { IoTelescopeSharp } from "react-icons/io5";
import { Box, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import ModalLogin from "./ModalAddMusic";
import { PiMusicNotesPlusFill } from "react-icons/pi";

function Menu() {
    return (
        <>  
            <Box>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "#FCFFE0", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <BsStack />
                        <Box>Explore</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "#FCFFE0", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <IoIosAlbums />
                        <Box>Albums</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "#FCFFE0", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <IoIosMusicalNotes />
                        <Box>Song</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "#FCFFE0", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <IoTelescopeSharp />
                        <Box>Artist</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "#FCFFE0", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <PiMusicNotesPlusFill />
                        <ModalLogin />
                    </Stack>
                </Link>
            </Box>
        </>
    )
}

export default Menu