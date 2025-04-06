import Customer from "./components/Customer";
import EndPoints from "./components/EndPoints";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MultiPlatform from "./components/MultiPlatform";
import Secure from "./components/Secure";
import TopSection from "./components/TopSection";
function App() {
  return (
    <div>
      <Header />
      <TopSection />
      <Features id="why" />
      <EndPoints id="features" />
      <MultiPlatform id="platforms" />
      <Customer id="customers" />
      <Secure />
      <Footer />
    </div>
  );
}

export default App;
