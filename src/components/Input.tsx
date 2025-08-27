import type { DataFormate } from "../interface/Input"

const Input = ({Data, register,inputErrorSms}:DataFormate) => {
  // const {id,label,name,inputType,placeholder} = Data
  return (
    <div>
        <label htmlFor={Data.id}>{Data.label}</label>
        <input type={Data.inputType} {...register(Data.name)} id={Data.id} placeholder={Data.placeholder} />
        <span>{inputErrorSms[Data.name]?.message}</span>
    </div>
  )
}

export default Input