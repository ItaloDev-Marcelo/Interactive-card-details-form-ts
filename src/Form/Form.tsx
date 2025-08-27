
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
    <form onSubmit={handleSubmit(onSubmitForm)}>
       <Input Data={inputFormate[0]} register={register}  inputErrorSms={errors}   />
       <Input Data={inputFormate[1]} register={register}  inputErrorSms={errors}   />
       <div>
       <label>EXP. DATE (MM/YY)</label>
       <Input Data={inputFormate[2]} register={register}  inputErrorSms={errors}   />
       <Input Data={inputFormate[3]} register={register}  inputErrorSms={errors}   />
       </div>
        <Input Data={inputFormate[4]} register={register}  inputErrorSms={errors}   />
        <Button type='submit' name='Confirm' />
        
    </form>
  )
}

export default Form