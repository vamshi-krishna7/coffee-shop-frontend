import  Container  from "../components/Container";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

function AppRouter() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default AppRouter;
