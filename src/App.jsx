import { useState } from 'react'
import TeamMemberCard from './components/TeamMemberCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamMemberCard name="John Doe" title="Software Engineer"/>
      <TeamMemberCard name="Himanshu" title="Designer"/>
    </>
  )
}

export default App
