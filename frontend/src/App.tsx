import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/Home/HomeLayout";
import NavbarLayout from "./Pages/Navbar/NavbarLayout";
import ProfileLayout from "./Pages/Profile/ProfileLayout";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <NavbarLayout />
      <div className="flex h-full w-full grow flex-col overflow-y-auto pb-[1rem] pt-[6rem]">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/profile/*" element={<ProfileLayout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
