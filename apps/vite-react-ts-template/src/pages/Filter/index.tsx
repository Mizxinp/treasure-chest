import React from 'react'
import FilterItem from './components/FilterItem'

const mockData = [
  {
    title: '分类',
    children: [
      {
        title: '一级1',
        children: [
          {
            title: '二级11'
          },
          {
            title: '二级12'
          },
          {
            title: '二级13'
          },
          {
            title: '二级14'
          },
        ]
      },
      {
        title: '一级2',
        children: [
          {
            title: '二级21'
          },
          {
            title: '二级22'
          },
          {
            title: '二级23'
          },
          {
            title: '二级24'
          },
        ]
      },
    ]
  },
  {
    title: '其他',
    children: [
      {
        title: '一级1',
        children: [
          {
            title: '二级11'
          },
          {
            title: '二级12'
          },
          {
            title: '二级13'
          },
          {
            title: '二级14'
          },
        ]
      },
      {
        title: '一级2',
        children: [
          {
            title: '二级21'
          },
          {
            title: '二级22'
          },
          {
            title: '二级23'
          },
          {
            title: '二级24'
          },
        ]
      },
    ]
  },
]

const Filter = () => {
  return (
    <div>
      {mockData.map(item => <FilterItem key={item.title} item={item} />)}
    </div>
  )
}

export default Filter