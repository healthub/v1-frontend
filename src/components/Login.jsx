import {
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  Typography,
  Container,
  Box,
  CssBaseline,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const SERVER_URL = "http://localhost:3026/auth/login";
const theme = createTheme();

export default function LoginPage() {
  const navigate = useNavigate();
  const navigateToMypage = () => {
    navigate("/mypage");
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(SERVER_URL, { email: values.email, password: values.password })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        console.log(response.data);
        swal("로그인에 성공하였습니다!", "마이페이지로 이동합니다.");
        navigateToMypage();
      })
      .catch((error) => {
        console.log(error);
        swal("로그인에 실패하였습니다!", "아이디와 비밀번호를 확인해주세요.");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            하루의 운동 기록할 땐?
            <br /> Fithub
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="비밀번호 기억하기"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호를 잊어버리셨나요?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
