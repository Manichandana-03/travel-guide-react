import './index.css'

const Place = props => {
  const {details} = props
  const {imageUrl, name, description} = details
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Place
