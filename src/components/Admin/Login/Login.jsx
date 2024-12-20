import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
// import LoginStyle from "./LoginStyle";
const Login = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            width: 500,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              padding: 2,
              textAlign: "center",
            }}
          >
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value=""
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#37a5d4",
                    borderWidth: 2,
                  },
                },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value=""
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#37a5d4",
                    borderWidth: 2,
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                alignSelf: "center",
                width: "30%",
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default Login;
