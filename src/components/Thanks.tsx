import Button from '../components/Button'
import complateIcon from '../assets/images/icon-complete.svg'
const Thanks = () => {
  return (
    <article className='w-[330px] lex flex-col text-center items-center justify-center
       md:w-[400px]  xl:w-[425px] mt-[-1.2em] relative md:top-[-4.5rem] xl:top-0  xl:right-20 xl:mt-0 '>
         
              <img src={complateIcon} alt='' className='mx-auto my-4  ' />
         
          <h5 className='text-[1.3em]  md:text-[1.8em]'>THANK YOU!</h5>
          <p className='text-gray-400 tracking-[1px]  '>we've  added your card details</p>
          <Button name='continue' style='w-[325px] md:w-[349px] xl:w-[350px] 
              h-[40px] bg-black text-white font-medium mt-5 cursor-pointer rounded-[4px] hover:opacity-90' />
    </article>
  )
}

export default Thanks