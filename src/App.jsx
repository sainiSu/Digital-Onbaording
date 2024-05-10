import Card from "./components/Card";
import { tutorialData } from "./data/TutorialData";
import { useState } from "react";
import "./App.css";
import "./components/Card.css";

function App() {
  const [step, setStep] = useState(0);

  function addSteps() {
    if (step < tutorialData.length - 1) {
      setStep(step + 1);
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <Card
        step={step}
        handleStep={addSteps}
        handlePrevStep={prevStep}
        data={tutorialData[step]}
      ></Card>
    </>
  );
}

export default App;