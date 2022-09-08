import { Button } from 'antd'
import React from 'react'
import { recoil } from 'state'
import { textState } from './store'

const Recoil = () => {
  const [count,setCount] = recoil.useRecoilState(textState)
  return (
    <div>
      <Button onClick={() => setCount(count + 1)} type="primary">add: {count}</Button>
    </div>
  )
}

export default Recoil