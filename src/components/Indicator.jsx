export default function Indicator({totalSteps , currentStep,  handleStepClick }) {

    return (
      <div className="indicator">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={index === currentStep ? 'active' : ''}
            onClick={() => handleStepClick(index)}
          />
        ))}
      </div>
    )
  }
  