import { counterState } from '@/store/jotailStore'
import React, { useContext, useReducer } from 'react'
import { useSetAtom } from 'jotai'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { reducer } from '../Jotai'
import { Context } from '@/store/context'

const Detail = () => {
  const setCount = useSetAtom(counterState)
  const navigate = useNavigate()

  const context = useContext(Context)

  return (
    <div>
      <div>详情页</div>
      <Button onClick={() => setCount(pre => (pre || 0) + 1)}>jotai点击加</Button>
      <Button onClick={() => context.dispatch({
        type: 'add',
        payload: {
          count: context.state.count + 1
        }
      })}>reducer点击加</Button>
      <Button onClick={() => navigate(-1)}>回列表</Button>
    </div>
  )
}

export default Detail