import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Hello } from "../pages/hello";
import {
  Vault,
  Books,
  Films,
  Goals,
  Graphs,
  Ideas,
  Library,
  Music,
  Notes,
  Profile,
  Progress,
  User
} from "../pages/profile";
import { Settings } from "../pages/settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="user" element={<User />} />
          <Route path="vault" element={<Vault />} />
          <Route path="books" element={<Books />} />
          <Route path="films" element={<Films />} />
          <Route path="goals" element={<Goals />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="library" element={<Library />} />
          <Route path="notes" element={<Notes />} />
          <Route path="progress" element={<Progress />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
