import React from 'react'
import { Button } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.page}>
      Home
      <Button type="primary">button</Button>
      <div onClick={() => navigate('/test')}>test</div>

      <div className='flex'>
        <div className='text-4xl'>1</div>
        <div>2</div>
      </div>
    </div>
  )
}

export default Home