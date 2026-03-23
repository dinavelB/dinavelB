import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExpOne } from "../Experiences/AboutExp/Exp1";
import { ExpTwo } from "../Experiences/AboutExp/Exp2";
import { ExpThree } from "../Experiences/AboutExp/Exp3";
import Homepage from "./Homepage";

export default function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="Qa-Engineer" element={<ExpOne />} />
          <Route path="Fullstack-Dev" element={<ExpTwo />} />
          <Route path="Backend-Dev" element={<ExpThree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
