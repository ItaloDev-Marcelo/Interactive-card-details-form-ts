import type { DataFormate } from "../interface/Input"

const Input = ({Data, register,inputErrorSms}:DataFormate) => {
  const {id, label,name,inputType,placeholder} = Data
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={inputType} {...register(name)} id={id} placeholder={placeholder} />
        <span>{inputErrorSms[name]?.message}</span>
    </div>
  )
}

export default Input