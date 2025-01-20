const main = (props) => {

  const languages = props.languages;

  return (
    <main>
      <div className='container'>
        <div className='d-flex'>
          {languages.map(item => (
            <button key={item.id}>{item.title}</button>
          ))}
        </div>
        {languages.map(item => (
          <div className="card" key={item.id}>
            <div className='card-text'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default main