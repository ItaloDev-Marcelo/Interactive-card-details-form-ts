import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CreditCardSchema, type CardSchema } from '../schema/Zod.shema'
import Input from '../components/Input'
import {inputFormate} from '../data/inputFormate'
import Button from '../components/Button'
import FrontCard from '../assets/images/bg-card-front.png';
import BackCard from '../assets/images/bg-card-back.png';
import CardLogo from '../assets/images/card-logo.svg';

const DetailsCardLayout = () => {

   const {register, handleSubmit, formState: {errors}, watch} = useForm<CardSchema>({resolver: zodResolver(CreditCardSchema)})
      
  const onSubmit = (formData:CardSchema) => {
        console.log(formData)
  }

  const CardNumber = watch('CardNumber') || '0000000000000000'
  const Name = watch('Name') || 'Jane Appleseed'
  const ExperationDateDay = watch('ExperationDateDay') ||'00'
  const ExperationDateYear = watch('ExperationDateYear') || '00'
  const Cvc = watch('Cvc') || '000'

  const formateNums = (valor:string) => valor.replace(/(.{4})/g, '$1  ')



  return (
    <>
       <form onSubmit={handleSubmit(onSubmit)} className='w-[330px] md:w-[400px] xl:w-[425px] '>
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
              <Button type='submit' name='Confirm' style='w-[325px] md:w-[300px] xl:w-[350px] 
              h-[40px] bg-black text-white font-medium cursor-pointer rounded-[4px] hover:opacity-90' />
              
       </form>

       <div className=' relative flex flex-col '>

           <figure className='relative top-20  xl:left-17 xl:top-2 '>
              <img src={BackCard} alt='' />
              <div className='flex flex-col absolute xl:top-24 top-23 left-72 xl:left-82'>
                 <p className='text-white text-[1em] font-medium '>{Cvc}</p>
              </div>
           </figure>


           <figure className='relative right-2 top-[-1.3em] xl:right-0 xl:top-0  '>
              <img src={FrontCard} alt=''  />
              <img src={CardLogo} alt='' className='absolute top-7 left-5 xl:left-7 xl:top-10' />
              <div className='flex flex-col  p-4 absolute top-22 left-1.5 xl:top-27 xl:left-5 w-[370px]'>
                 <p className='text-white  text-[1.90em] xl:text-[1.93em] font-semibold tracking-[2px] mb-1.5'>{formateNums(CardNumber)}</p>
                 <div className='flex justify-between items-center '>
                    <p className='text-white text-[.8em] font-medium tracking-[2px] uppercase'>{Name}</p>
                    <p className='text-white text-[1.1em] font-medium tracking-[2px] mr-2 xl:mr-0'> {ExperationDateDay}/{ExperationDateYear}</p>
                 </div>
              </div>
           </figure>


       </div>
    </>
  )
}

export default DetailsCardLayout