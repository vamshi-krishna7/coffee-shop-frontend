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
          {/* <Route path="/wakeup" element={<WakeupCallPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default AppRouter;
