import Quiz from "./components/Quiz";
import "./App.css";
import logo from "../src/assets/images/quizlogo (1).png";
const App = () => {
  return (
    <div className="app">
      <img className="logo" src={logo} alt="logo" />
      <Quiz />
      <p className="footer">បង្កើតដោយ ❤️ មេធីមក្រុមទី ៦</p>
    </div>
  );
};

export default App;