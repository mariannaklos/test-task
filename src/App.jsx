import "./App.css";
import users from "./data/users.json";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  return <Gallery users={users} />;
}

export default App;
