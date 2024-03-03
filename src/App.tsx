import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { UserDetailsView } from "./views/UserDetailsView";
import { UserListingView } from "./views/UserListingView";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider forceColorScheme="dark">
          <Routes>
            <Route path="/users/:id" element={<UserDetailsView />} />
            <Route path="/users" element={<UserListingView />} />
          </Routes>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
