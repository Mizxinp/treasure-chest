import { Button } from 'antd'
import React from 'react'
import { recoil } from 'state'
import Child from './components/Child'
import { countState, nameState, nameAndCountState } from './store'

const { useRecoilState } = recoil

const Recoil = () => {
  const [count,setCount] = useRecoilState(countState)
  const [name,setName] = useRecoilState(nameState)
  return (
    <div>
      <Button onClick={() => setCount(count + 1)} type="primary">add: {count}</Button>
      <div onClick={() => setName(`${name}${Math.random().toFixed(3)}`)}>{name}</div>
      <Child />
    </div>
  )
}

export default Recoil