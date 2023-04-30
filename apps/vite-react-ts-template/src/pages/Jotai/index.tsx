import { counterState } from '@/store/jotailStore'
import { useAtomValue } from 'jotai'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useReducer } from 'react'
import { Context } from '@/store/context';

export function reducer(state: any, action: any) {
  console.log('state', state, action);
  
  return state
}

// const obj = {}
// obj.set('a', 1)
// console.log('obj', obj);


const Jotai = () => {
  // jotai
  const count = useAtomValue(counterState)
  const navigate = useNavigate()


  const context = useContext(Context)


  
  return (
    <div>
      <div>Jotai数值：{count}</div>
      <div>reducer数值：{context.state.count}</div>
      <div onClick={() => navigate('/detail')}>去详情</div>
      <div onClick={() => {
        context.set(count, 2)
      }}>设置</div>
    </div>
  )
}

export default Jotai