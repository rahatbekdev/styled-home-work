import { Finish } from "./components/finished-group/Finish";
import { WorkGroup } from "./components/home-work-3/WorkGroup";
import { HomeWork4 } from "./components/home-work-4/HomeWork4";
// import { HomeWork3 } from "./components/home-work-3/HomeWork3";

const App = () => {
  return (
    <div>
      <Finish />
      {/* <HomeWork3/> */}
      <br />
      <WorkGroup />
      <br />
      <HomeWork4 />
    </div>
  );
};

export default App;
