
export default function Entry({ entry: {name, message } }) {
  return (
    <div className="entry-container">
      <div className="entry-el">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}
