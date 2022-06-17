import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css";
import Navbar from "./Navbar";
import { useNavbar } from "../contexts/ShowNavbarContext";
import About from "./About";
import Write from "./Write";
import LoginContainer from "./LoginContainer";
import Main from "./Main";
import Posts from "./Posts";
import SinglePost from "./SinglePost";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

function App() {
  const { navbar } = useNavbar();

  return (
    <>
      <BrowserRouter>
        <div className={`container ${navbar}`}>
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/blogs/:postId" element={<SinglePost />} />
              <Route exact path="/blogs" element={<Posts />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/write" element={<Write />} />
              <Route exact path="/login" element={<LoginContainer />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/edit-profile" element={<EditProfile />} />
            </Routes>
          </div>
          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
