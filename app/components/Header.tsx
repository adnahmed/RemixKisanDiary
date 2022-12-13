import { useContext } from 'react'
import { MyContext } from '~/root'

export default function Header() {
  const result = useContext(MyContext)
  console.log(result)
  return <h1>Header {result}</h1>
}
