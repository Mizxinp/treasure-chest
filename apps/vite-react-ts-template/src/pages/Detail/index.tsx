import { counterState } from '@/store/jotailStore'
import React from 'react'
import { useSetAtom } from 'jotai'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const setCount = useSetAtom(counterState)
  const navigate = useNavigate()
  return (
    <div>
      <div>详情页</div>
      <Button onClick={() => setCount(pre => (pre || 0) + 1)}>点击加</Button>
      <Button onClick={() => navigate(-1)}>回列表</Button>
    </div>
  )
}

export default Detail