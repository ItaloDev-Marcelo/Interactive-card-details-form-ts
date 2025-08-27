
interface ButtonFormate {type?: 'submit', name: string}

const Button = ({type, name}:ButtonFormate ) => {
  return  <button type={type}>{name}</button>
}

export default Button