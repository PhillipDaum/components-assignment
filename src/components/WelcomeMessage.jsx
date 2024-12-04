import './WelcomeMessage.css'

function WelcomeMessage( {str} ) {
  return (
    <>
      <p className='welcome-message'>{str}</p>
    </>
  )
}

export default WelcomeMessage
