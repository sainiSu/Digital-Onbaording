export default function Card({ data , handleStep}) {

    function handleClick(){
        handleStep()
    }


  return (
    <div className="card">
       
       <div className="card-header">
        <img src={data.image} alt="" className="card-image" />

       </div>

       <div className="card-body">

        <h1 className="card-title">{data.title}</h1>
        <p>{data.description}</p>

       </div>

      <button className="card-btn" onClick={ handleClick}>&#11166;</button>

    </div>
  )
}