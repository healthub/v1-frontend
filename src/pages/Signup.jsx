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

const SERVER_URL = "http://localhost:3026/users/register";
const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    let body = JSON.stringify({ email, password });
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
    } else axios.post(SERVER_URL, body);
    console.log(body);
    swal("회원가입에 성공하였습니다!", "로그인 페이지로 이동합니다.");
    navigateToLogin();
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="비밀번호 확인"
                  type="password"
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
