import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DefaultApp from "./DefaultApp";
import GithubRepo from "./GithubRepo";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="gh/:user/:repo/*" element={<GithubRepo />} />
          <Route exact path="/" element={<DefaultApp />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
