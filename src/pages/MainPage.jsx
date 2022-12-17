// import Header from "../components/Header/Header";
import NavbarNoAuth from "../components/NavbarNoAuth";
import "../styles/navbarAuth.css";
import MainLeft from "../components/MainLeft";
import MainRight from "../components/MainRight";

export default function MainPage() {
  return (
    <>
      <NavbarNoAuth />
      <main className="main">
        <div>
          <MainLeft />
          <MainRight />
        </div>
      </main>
    </>
  );
}
