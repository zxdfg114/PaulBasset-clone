import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 *  페이지이동시 화면 상단으로 이동시켜줌
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}