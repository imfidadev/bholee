import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import Header from "./header";
import HomePage from "./homePage";
import { Route, Routes } from "react-router-dom";
import EventPage from "./eventPage";
import PaymentSuccess from "./components/PaymentSuccess";

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
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/checkout/success" element={<PaymentSuccess />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
