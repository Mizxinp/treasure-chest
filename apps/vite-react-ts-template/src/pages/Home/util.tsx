
class Base {
  field
  public constructor(item: any) {
    console.log('执行了');
    
    this.field = item
  }

  getField() {
    return this.field
  }
}
class Title extends Base{
  init(item: any) {
    console.log('item', item);
  }
}
class Image extends Base{
    init(item: any) {
    console.log('image', item);
  }
}
class Video extends Base{
    init(item: any) {
    console.log('video', item);
  }
}

const viewList = [
  Title,
  Image,
  Video
]

const map = viewList.reduce((pre: any, cur, index) => {
  pre[index] = cur
  return pre
}, {})

export function getViews(item: any) {
  console.log(map);
  
  const data = new map[item.index](item)
  console.log('data', data.getField());
}