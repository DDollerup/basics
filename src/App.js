// General
import { HashRouter, Route, Routes } from "react-router-dom";
// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
