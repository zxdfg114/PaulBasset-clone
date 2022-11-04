import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
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
import FindStore from "./routes/FindStore";
import Items from "./routes/Items";
import Detail from "./routes/Detail";
import Brand from "./routes/Brand";
import SignUp from "./routes/SignUp";
import "./css/style.min.css";
import MobileMain from "./components/MobileMain";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path={"/event/:id"} element={<SubEvent></SubEvent>} />
            <Route path={"/Login"} element={<LogIn />} />
            <Route path={"/find"} element={<FindStore />} />
            <Route path={"/Items"} element={<Items />} />
            <Route path={"/detail/:id"} element={<Detail />} />
            <Route path={"/Brand"} element={<Brand />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route
              path={"/*"}
              element={
                <div className="nothing">
                  <h1>준비중입니다</h1>
                </div>
              }
            />
            <Route
              path={"/"}
              element={
                <>
                  <Hero />
                  <MainBanner />
                  <MobileMain />
                </>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
