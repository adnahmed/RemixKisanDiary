import { useContext } from 'react'
import { MyContext } from '~/root'

export default function Footer() {
  const result = useContext(MyContext)
  console.log(result)
  return <h3>Footer {result}</h3>
}
