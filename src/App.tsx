import { BrowserRouter, Route, Routes } from "react-router-dom";
import SoiledSocietyLanding from "./pages/soiled-society-landing";
import BlankDemo from "./pages/blank-demo";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SoiledSocietyLanding />} />
          <Route path="/soil-signal-demo" element={<BlankDemo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
