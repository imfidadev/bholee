import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import Header from "./header";
import HomePage from "./homePage";

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
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
