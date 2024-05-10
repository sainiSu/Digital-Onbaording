export default function Card( {data , handleStep}) {
 
    function handleClick(){
      handleStep()
    }
   
    return (
      <div>
        {data.title && <h2>{data.title}</h2>}
  
        {data.description && <p><strong>{data.description}</strong></p>}
  
        <button onClick={handleClick}>Card-Dispalyer</button>
      </div>
    )
  }