import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import TaskBoard from "./components/TaskBoard/TaskBoard";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
};

export default App;
