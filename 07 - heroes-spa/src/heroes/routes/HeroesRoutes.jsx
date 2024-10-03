import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui/components/Navbar";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="dc" element={<DcPage />}></Route>

          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>

          <Route path="/" element={<Navigate to="/marvel" />}></Route>
        </Routes>
      </div>
    </>
  );
};
