import ReactDOM from "react-dom";

import NavBar from "./NavBar";

import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <NavBar />

      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
