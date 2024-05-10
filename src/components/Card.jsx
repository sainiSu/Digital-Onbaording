import Indicator from "./Indicator";

export default function Card({ step, data, handleStep, handlePrevStep }) {

  const handleBulletButtonClick = (index) => {
    handleStep(index);
  };

  return (
    <div className="card">

      {/* Indicator component */}

      <Indicator
        totalSteps={data.length}
        currentStep={step}
        handleStepClick={handleBulletButtonClick}
      />
      <div className="card-header"  style={{ backgroundColor: data[step].bgColor }}>

        <img src={data[step].image} alt="" className="card-image" />

      </div>

      <div className="card-body">

        <h1 className="card-title">{data[step].title}</h1>
        <p>{data[step].description}</p>

      </div>

      <div className="buttons">

        <div className="indicator">

          {/* Add click handlers to bullet buttons */}

          {data.map((_, index) => (<button
              key={index}
              onClick={() => handleBulletButtonClick(index)}
              className={index === step ? "active" : ""}>
              &#11096;
            </button>
          ))}
        </div>
      

      <div>
        {/* Previous and next buttons */}
        {step > 0 && (
          <button className="card-btn2" onClick={handlePrevStep}>
            &#11164;
          </button>
        )}
        {step < data.length - 1 && (
          <button className="card-btn" onClick={() => handleStep(step + 1)}>
            &#11166;
          </button>
        )}
      </div>
    </div>
    </div>
  );
}
