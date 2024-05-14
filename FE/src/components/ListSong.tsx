import { Box, Stack } from "@mui/material";
import ButtonPlay from "./buttonPlay";
import ListAlbums from "../mocks/ListAlbums.json";

function ListSong() {
  console.log(ListAlbums);
  return (
    <>
      {ListAlbums.map((data, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#402B3A",
            width: "100%",
            height: "100%",
            borderRadius: "13px",
            marginBottom: '10px'
          }}
        >
          <Stack
            direction="row"
            color="white"
            display="flex"
            justifyContent="space-between"
          >
            <Stack direction={"row"} gap="30px">
              <img
                alt={data.alt}
                src={data.src}
                style={{ width: "120px", borderRadius: "13px", padding: "4px" }}
              />
              <Stack direction="column">
                <Box sx={{ marginTop: 5, fontWeight: "bold" }}>{data.alt}</Box>
                <Box sx={{ marginTop: 1 }}>{data.tittle}</Box>
              </Stack>
            </Stack>
            <ButtonPlay />
          </Stack>
        </Box>
      ))}
    </>
  );
}

export default ListSong;
