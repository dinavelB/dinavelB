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
          <Route path="exp-one" element={<ExpOne />} />
          <Route path="exp-two" element={<ExpTwo />} />
          <Route path="exp-three" element={<ExpThree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
