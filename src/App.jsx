import Card from "./components/Card";
import { tutorialData } from "./data/TutorialData";
import { useState } from "react";
import "./App.css";
import "./components/Card.css";

function App() {
  const [step, setStep] = useState(0);

  const handleStep = (newStep) => {
    setStep(newStep);
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <Card
        step={step} handleStep={handleStep} handlePrevStep={handlePrevStep} data={tutorialData}
      ></Card>
    </>
  );
}


export default App;
