export default function Card({ data, handleStep, handlePrevStep }) {

    return (
      <div className="card">
  
        <div className="card-header">
  
          <img src={data.image} alt="" className="card-image" />
  
        </div>
  
        <div className="card-body">
  
          <h1 className="card-title">{data.title}</h1>
          <p>{data.description}</p>
  
        </div>
  
        <div className="buttons">
          
          <div className="indicator">
  
            <ul>
              <li>&#11044;</li>
              <li>&#11044;</li>
              <li>&#11044;</li>
            </ul>
          </div>
        <div>
          <button className="card-btn2" onClick={handlePrevStep}>&#11164;</button>
          <button className="card-btn" onClick={handleStep}>&#11166;</button>
          </div>
        </div>
      </div>
    );
  }