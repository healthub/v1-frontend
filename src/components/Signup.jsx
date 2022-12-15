import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

const SERVER_URL = "http://localhost:3026/auth/register";
const theme = createTheme();

export default function Signup() {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();

  const handleChange_email = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleChange_password = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleChange_repassword = (e) => {
    e.preventDefault();
    setRePassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요!");
      return;
    } else if (password === "") {
      alert("비밀번호를 입력해주세요!");
      return;
    } else if (repassword === "") {
      alert("비밀번호 확인을 입력해주세요!");
      return;
    } else if (password !== repassword) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    } else
      axios
        .post(SERVER_URL, { email, password })
        .then((response) => {
          console.log(response.data);
          swal("회원가입에 성공하였습니다!", "로그인 페이지로 이동합니다.");
          navigateToLogin();
        })
        .catch((error) => {
          console.log(error);
          swal("회원가입에 실패하였습니다", "다시 시도해주세요.");
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
          <Typography component="h1" variant="h5" onClick={navigateToMain}>
            Welcome to Healthub
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={onSubmitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange_email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleChange_password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="비밀번호 확인"
                  type="password"
                  onChange={handleChange_repassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  계정이 이미 있다면 이 곳에서 로그인 하세요.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
