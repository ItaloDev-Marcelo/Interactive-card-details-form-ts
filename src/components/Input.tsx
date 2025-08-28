import type { DataFormate } from "../interface/Input"

const Input = ({Data, register,inputErrorSms,style}:DataFormate) => {
  
  return (
    <div className={`flex flex-col ${style}`}>
        <label htmlFor={Data.id} className="mb-2">{Data.label}</label>
        <input className="border-1 h-[40px] rounded-[7px]" type={Data.inputType} {...register(Data.name)} id={Data.id} placeholder={Data.placeholder} />
        <span className="text-red-500">{inputErrorSms[Data.name]?.message}</span>
    </div>
  )
}

export default Input