export default function Card( {data}) {
    return (
      <div>
        {data.title && <h2>{data.title}</h2>}
  
        {data.description && <p><strong>{data.description}</strong></p>}
  
        <button>Card-Dispalyer</button>
      </div>
    )
  }