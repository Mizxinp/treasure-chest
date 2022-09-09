import { recoil } from 'state'
import {  nameAndCountState } from '../store'

const { useRecoilValue } = recoil

const Child = () => {
  const text = useRecoilValue(nameAndCountState)
  return (
    <div>Child: {text}</div>
  )
}

export default Child