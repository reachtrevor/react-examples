import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetailsView from "./views/UserDetailsView";
import UserListingView from "./views/UserListingView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<UserDetailsView />} />
        <Route path="/users" element={<UserListingView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
