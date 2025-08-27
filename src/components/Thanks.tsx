import Button from '../components/Button'
import complateIcon from '../assets/images/icon-complete.svg'
const Thanks = () => {
  return (
    <article>
          <figure>
              <img src={complateIcon} alt='' />
          </figure>
          <h5>THANK YOU!</h5>
          <p>we've  added your card details</p>
          <Button name='continue' />
    </article>
  )
}

export default Thanks