import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./component/home/HomePage";
import Layout from "./component/layout/Index";
import AuthorPage from "./component/author/AuthorPage";
import BlogPage from "./component/blog/BlogPage";
import ScrollToTop from "./component/shared/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
