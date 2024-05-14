import { BsStack } from "react-icons/bs";
import { IoIosAlbums, IoIosMusicalNotes } from "react-icons/io";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { IoTelescopeSharp } from "react-icons/io5";
import { Box, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"

function Menu() {
    return (
        <>  
            <Box>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "white", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <BsStack />
                        <Box>Explore</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "white", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <IoIosAlbums />
                        <Box>Albums</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "white", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <IoIosMusicalNotes />
                        <Box>Song</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "white", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <IoTelescopeSharp />
                        <Box>Artist</Box>
                    </Stack>
                </Link>
            </Box>

            <Box mt='20px'>
                <Link component={RouterLink} to="/" underline="none" sx={{gap:"30px", color: "white", fontSize: '18px'}}>
                    <Stack direction="row" px="30px" gap="30px" color="white">
                        <PiMusicNotesPlusFill />
                        <Box>Add Song</Box>
                    </Stack>
                </Link>
            </Box>
        </>
    )
}

export default Menu