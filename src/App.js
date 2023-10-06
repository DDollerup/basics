// General
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
