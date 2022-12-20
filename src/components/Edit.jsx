import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SERVER_URL = "http://localhost:3026/user-profile";
const theme = createTheme();

export default function Signup() {
  const [userName, setUsername] = useState();
  const [bio, setBio] = useState();
  const [mainClub, setMainclub] = useState();
  const [instaAccount, setInstagram] = useState();

  const navigate = useNavigate();

  const navigateToMypage = () => {
    navigate("/mypage");
  };

  const handleChange_username = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleChange_bio = (e) => {
    e.preventDefault();
    setBio(e.target.value);
  };

  const handleChange_mainclub = (e) => {
    e.preventDefault();
    setMainclub(e.target.value);
  };

  const handleChange_instagram = (e) => {
    e.preventDefault();
    setInstagram(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (userName === "") {
      alert("닉네임을 설정해주세요.");
      return;
    } else
      axios
        .post(
          SERVER_URL,
          { userName, bio, mainClub, instaAccount },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          swal("프로필 수정을 완료하였습니다.");
          navigateToMypage();
        })
        .catch((error) => {
          console.log(error);
          swal("프로필 수정에 실패하였습니다.");
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
            하루하루 운동을 기록할 땐?
            <br /> Fithub
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={onSubmitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="username"
                  name="username"
                  autoComplete="username"
                  onChange={handleChange_username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="bio"
                  label="bio"
                  type="bio"
                  autoComplete="bio"
                  onChange={handleChange_bio}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="mainclub"
                  label="mainclub"
                  type="mainclub"
                  onChange={handleChange_mainclub}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="instaAccount"
                  label="instagram account"
                  type="instaAccount"
                  onChange={handleChange_instagram}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              프로필 생성하기
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
