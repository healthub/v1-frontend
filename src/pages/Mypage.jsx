import NavbarAuth from "../components/NavbarAuth";
import Profile from "./ProfilePage";
import Contribution from "./Contribution";

function MyPage() {
  return (
    <div>
      <NavbarAuth />
      <hr />
      <Contribution />
      <Profile />
    </div>
  );
}

export default MyPage;
