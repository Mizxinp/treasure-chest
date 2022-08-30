import { Button } from 'antd'
import React, { useEffect } from 'react'

const Test = () => {
  useEffect(() => {
    console.log('init');
  }, [])

  return (
    <div className='flex'>
      
      <div>Test</div>
      <Button type="primary">jjjjj</Button>
    </div>
  )
}

export default Test