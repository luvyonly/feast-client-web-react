import React from "react";
import GlobalStyle from "./GlobalStyle";
// import Header from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Container/Home";
import Pricing from "./components/Container/Pricing";
import About from "./components/Container/About";
import Navbar from "./components/Header";
import * as S from "./Styled";
// import slides from "./mock.json";

// interface test {
//   image: string;
//   title: string;
//   subTitle: string;
//   interval: number;
// }

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <S.Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </S.Container>
    </div>
  );
}

export default App;
