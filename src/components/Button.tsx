
interface ButtonFormate {type?: 'submit', name: string, style?: string}

const Button = ({type, name, style}:ButtonFormate ) => {
  return  <button type={type} className={style}>{name}</button>
}

export default Button