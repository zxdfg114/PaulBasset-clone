import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Main";
import MainBanner from "./components/MainBanner";
import SubEvent from "./routes/event";
import LogIn from "./routes/Login";
import "./css/style.min.css";
import FindStore from "./routes/FindStore";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MainBanner />
              </>
            }
          />
          <Route path="event/:id" element={<SubEvent></SubEvent>}></Route>
          <Route path={"/Login"} element={<LogIn />} />
          <Route path={"/find"} element={<FindStore />} />
          <Route
            path={"*"}
            element={
              <div className="nothing">
                <h1>준비중입니다</h1>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
