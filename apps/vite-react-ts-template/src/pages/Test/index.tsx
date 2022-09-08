import { getAllWebPage } from '@/service'
import { Button } from 'antd'
import React, { useEffect } from 'react'
import { recoil } from 'state'
import { textState } from '../Recoil/store'

const Test = () => {
  const [count ,setCount] = recoil.useRecoilState(textState)

  useEffect(() => {
    // getAllWebPage({
    //   templateInfo: {},
    //   page: { currentPage: 1, showCount: 9999 },
    // })
    //   .then((res) => {
    //     console.log('res', res);
    //   })
  }, [])

  return (
    <div className='flex'>
      
      <div>Test</div>
      <Button type="primary">jjjjj</Button>
      <Button type="primary" onClick={() => setCount(count + 1)}>test recoil add</Button>
    </div>
  )
}

export default Test