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

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Routes>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              element={
                <>
                  <Hero />
                  <MainBanner />
                </>
              }
            />
            <Route
              path={process.env.PUBLIC_URL + "/event/:id"}
              element={<SubEvent></SubEvent>}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Login"}
              element={<LogIn />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/find"}
              element={<FindStore />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Items"}
              element={<Items />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/detail/:id"}
              element={<Detail />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Brand"}
              element={<Brand />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/signup"}
              element={<SignUp />}
            />
            <Route
              path={process.env.PUBLIC_URL + "*"}
              element={
                <div className="nothing">
                  <h1>준비중입니다</h1>
                </div>
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
