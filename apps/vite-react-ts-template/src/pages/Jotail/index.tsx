import { counterState } from '@/store/jotailStore'
import { useAtomValue } from 'jotai'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Jotail = () => {
  const count = useAtomValue(counterState)
  const navigate = useNavigate()
  return (
    <div>
      <div>Jotail数值：{count}</div>
      <div onClick={() => navigate('/detail')}>去详情</div>
    </div>
  )
}

export default Jotail