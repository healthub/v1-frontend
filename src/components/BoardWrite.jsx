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

const SERVER_URL = "http://localhost:3026/boards";
const theme = createTheme();

export default function Signup() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const navigate = useNavigate();

  const navigateToMypage = () => {
    navigate("/mypage");
  };

  const handleChange_title = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChange_contents = (e) => {
    e.preventDefault();
    setContents(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (title === "") {
      alert("제목을 입력해주세요!");
      return;
    } else
      axios
        .post(
          SERVER_URL,
          { title, contents },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          swal("게시글 작성을 완료하였습니다.");
          navigateToMypage();
        })
        .catch((error) => {
          console.log(error);
          swal("게시글 작성에 실패하였습니다.");
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
            운동 기록하기
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
                  label="오늘의 운동 부위"
                  name="title"
                  autoComplete="title"
                  onChange={handleChange_title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contents"
                  label="운동 일지"
                  type="contents"
                  autoComplete="contents"
                  onChange={handleChange_contents}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              운동 기록하기
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
