import HomeLayout from "./Pages/Home/HomeLayout";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-full w-full grow flex-col pt-[4rem]">
        <HomeLayout />
      </div>
    </div>
  );
}

export default App;
