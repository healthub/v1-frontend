import { React, useState } from "react";
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

const SERVER_URL = "http://localhost:3026/users";
const theme = createTheme();

export default function SignUp() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios.post(SERVER_URL, { email, password });
  };
  const onChange = (e) => {
    //input에 name을 가진 요소의 value에 이벤트를 걸었다
    const { name, value } = e.target; // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
    const nextInputs = { ...inputs, [name]: value }; //스프레드 문법으로 기존의 객체를 복사한다.
    setInputs(nextInputs); //만든 변수를 seInput으로 변경해준다.
  };

  function CheckPass(str) {
    //비밀번호 정규식
    let reg1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    return reg1.test(str);
  }

  function letsJoin() {
    //로그인 유효성 검사
    if (inputs.email === "") {
      alert("이메일을 입력해주세요!");
      return;
    } else if (inputs.password === "") {
      alert("비밀번호를 입력해주세요!");
      return;
    } else if (CheckPass(inputs.password) === false) {
      alert("비밀번호는 영문+숫자 6자를 조합하여 입력해주세요 !");
      return;
    } else {
      fetch(SERVER_URL, {
        //원하는 주소 입력
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
        }),
      })
        .then((res) => res.json())
        .then((resonse) => {
          if (resonse === true) {
            window.location.replace(SERVER_URL);
          } else {
            alert("다시 시도해주세요");
          }
        });
    }
  }

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
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
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={letsJoin}
            >
              가입하기
            </Button>
            <Grid container justifyContent="flex-end">
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
