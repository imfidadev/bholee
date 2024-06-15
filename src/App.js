import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import Header from "./header";
import HomePage from "./homePage";
import { Route, Routes } from "react-router-dom";
import EventPage from "./eventPage";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={4000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
