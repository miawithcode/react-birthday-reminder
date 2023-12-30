const Person = ({name, age, image}) => {
  return (
    <article>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{age} years</p>
    </article>
  )
}
export default Person