import type { DataFormate } from "../interface/Input"

const Input = ({Data, register,inputErrorSms,style}:DataFormate) => {
  
  return (
    <div className={`flex flex-col ${style}`}>
        <legend className="mb-1 fieldset-legend">{Data.label}</legend>
        <input className={`border-1 h-[40px] rounded-[7px] font-semibold input ${inputErrorSms[Data.name] && 'border-red-500' }   ${style}`} type={Data.inputType} {...register(Data.name)} placeholder={Data.placeholder} />
        <span className="text-red-500  label text-[0.7em] mt-0.5">{inputErrorSms[Data.name]?.message}</span>
    </div>

  )
}

export default Input