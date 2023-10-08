import { useState } from 'react'


const FilterItem = (props: { item: any}) => {
  const { item } = props
  const [clickedItem, setClickedItem] = useState<any>({ title: '', childrenTitle: []})
  const [hoverItem, setHoverItem] = useState({ title: '', childrenTitle: []})
  

  const { children: secondRow, title } = item.children.find((ele: any) => ele.title === hoverItem.title) || {}
  

  return (
    <div style={{ display: 'flex', marginBottom: 40 }}>
      <div style={{ marginRight: 20 }}>{item.title}</div>
      <div>
        <div style={{ display: 'flex' }}>
          {item.children.map((ele: any) => (
            <div
              key={ele.title}
              style={{
                marginRight: 20,
                color: clickedItem.title === ele.title ? 'green' : '#333',
                backgroundColor: ((hoverItem.title && hoverItem.title === ele.title) || (clickedItem.title && clickedItem.title === ele.title) || title === ele.title) ? '#f00' : '#fff'
              }}
              onClick={() => {
                // 剔除掉不是自己的那个title
                const hasInclude = ele.children.some((el: any) => clickedItem.childrenTitle.includes(el.title) )
                setClickedItem((pre: any) => ({ childrenTitle: hasInclude ? pre.childrenTitle : [], title: ele.title }))
              }}
              onMouseEnter={() => setHoverItem((pre) => ({ ...pre, title: ele.title }))}
              onMouseLeave={() => setHoverItem((pre) => ({ childrenTitle: [], title: '' }))}
            >
              {ele.title}
            </div>
          ))}
        </div>
        <div
          style={{ display: 'flex', backgroundColor: '#f8f9fa' }}
          onMouseEnter={() => setHoverItem((pre) => ({ ...pre, title }))}
          onMouseLeave={() => setHoverItem((pre) => ({ ...pre, title: '' }))}
        >
          {secondRow?.map((ele: any) => (
            <div
              key={ele.title}
              style={{ marginRight: 20, color: clickedItem.childrenTitle.includes(ele.title) ? 'green' : '#333' }}
              onClick={() => {
                // 剔除掉不是自己的那个title
                if (title !== clickedItem.title) {
                  setClickedItem((pre: any) => ({ title: '', childrenTitle: [ele.title] }))
                } else {
                  setClickedItem((pre: any) => ({ ...pre, childrenTitle: [ele.title] }))
                }
              }}
            >
              {ele.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterItem