// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import './App.css';
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeWrapper from "./ThemeWrapper";
import Scroop from './Scroop';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // نحاكي تحميل البيانات
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 ثواني

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="login" style={{
        width: "60px",
        // margin:"auto",
        height: "60px",
        border: "6px solid #f3f3f3",
        borderTop: "6px solid #123456",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} >
          <style>
  {`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
</style>
        </div>
    );
  }
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div>
          <Navbar/>
          <Scroop/>
          <Footer/>
          {/* <ThemeToggleButton /> */}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;

