import { getAllWebPage } from '@/service'
import { Button } from 'antd'
import React, { useEffect } from 'react'

const Test = () => {

  useEffect(() => {
    getAllWebPage({
      templateInfo: {},
      page: { currentPage: 1, showCount: 9999 },
    })
      .then((res) => {
        console.log('res', res);
      })
  }, [])

  return (
    <div className='flex'>
      
      <div>Test</div>
      <Button type="primary">jjjjj</Button>
    </div>
  )
}

export default Test