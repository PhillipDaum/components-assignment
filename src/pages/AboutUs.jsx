import { useState } from 'react'
import WelcomeMessage from '../components/WelcomeMessage';

function AboutUs() {
  const [name, setName] = useState("Carl"); 
  let message = `hello ${name}`

  return (
    <>
      <WelcomeMessage str={message}/>
    </>
  )
}

export default AboutUs
