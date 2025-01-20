import { useState } from "react";

const main = (props) => {

  const languages = props.languages;
  const [selectId, setSelectId] = useState(null);

  const handlerToggle = (id) => {
    setSelectId(id)
  }

  return (
    <main>
      <div className='container'>
        <div className='d-flex'>
          {languages.map(item => (
            <button key={item.id} onClick={() => handlerToggle(item.id)}>{item.title}</button>
          ))}
        </div>
        {languages.map(item => (
          selectId == item.id && (
            <div className="card" key={item.id}>
              <div className='card-text'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </main>
  )
}

export default main