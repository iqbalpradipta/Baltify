import { Box, Button, Grid, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link as RouterLink } from "react-router-dom";
import RegisterHooks from "../hooks/register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    name,
    setName,
    handleSubmit,
  } = RegisterHooks();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "#75A47F" }}
      >
        <Grid item xs={3}>
          <Box
            height={500}
            width={1000}
            sx={{
              border: "2px solid grey",
              boxShadow: 4,
              borderRadius: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FCFFE0",
              backgroundImage: `url(${"https://img.freepik.com/free-vector/modern-background-with-abstract-shapes_23-2148909975.jpg"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `cover`,
              opacity: 0.8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid black",
                borderRadius: "10px",
                width: "500px",
                height: "500px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FCFFE0",
              }}
            >
              <Box
                sx={{
                  mx: "70px",
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "black",
                }}
              >
                Register
              </Box>
              <Box mt="40px">
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 2.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 2.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Username"
                  value={username}
                  variant="standard"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Box>
              <Box>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 2.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  value={email}
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 2.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Password"
                  value={password}
                  variant="standard"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Button
                variant="contained"
                color="success"
                sx={{ width: "300px", borderRadius: "10px" }}
                onClick={handleSubmit}
              >
                Register
              </Button>
              <Box sx={{ mt: "20px", color: "black" }}>
                You already register account ?{" "}
                <Link component={RouterLink} to="/login">
                  Login
                </Link>
              </Box>
            </Box>
          </Box>
          <ToastContainer />
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
