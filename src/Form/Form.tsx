
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CreditCardSchema, type CardSchema } from '../schema/Zod.shema'
import Input from '../components/Input'
import {inputFormate} from '../data/inputFormate'
import Button from '../components/Button'
const Form = () => {

    const {register, handleSubmit,formState: {errors}} = useForm({resolver: zodResolver(CreditCardSchema)})
    
    const onSubmitForm = (formData:CardSchema) => {
      console.log(formData)
    }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className='w-[330px] md:w-[400px] xl:w-[425px] bg-blue-200'>
       <Input Data={inputFormate[0]} register={register}  inputErrorSms={errors} style='w-[325px] md:w-[300px] xl:w-[350px] '  />
       <Input Data={inputFormate[1]} register={register}  inputErrorSms={errors} style='w-[325px] md:w-[300px] xl:w-[350px]'  />
       <div className='flex flex-row flex-wrap'>
      <div className='flex flex-col'>      
       <label className='fieldset-legend'>EXP. DATE (MM/YY)</label>
        <div className='flex flex-row items-center relative  top-[-.7em]'>
           <Input Data={inputFormate[2]} register={register}  inputErrorSms={errors} style='w-[75px] md:w-[90px] mr-4'   />
           <Input Data={inputFormate[3]} register={register}  inputErrorSms={errors} style='w-[75px] md:w-[90px] mr-4'   />
        </div>
          </div>
          
        <Input Data={inputFormate[4]} register={register}  inputErrorSms={errors} style='w-[105px] md:w-[140px]'  />
       </div>
        <Button type='submit' name='Confirm' />
        
    </form>
  )
}

export default Form