
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  ITEM: 'item',
  // 在这里可以定义其他类型常量
};

export function DroppableArea({ onDrop }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM, // 接受的拖动源类型
    drop: (item) => {
      onDrop(item); // 在放置目标中处理放置事件，可以将数据传递给父组件
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isActive ? 'lightgreen' : 'lightgrey',
        padding: '1rem',
        margin: '1rem 0',
      }}
    >
      {isActive ? '松开鼠标放置数据' : '将数据拖到这里'}
    </div>
  );
}

export function DraggableItem(props: any) {
  const { id, text } = props
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM, // 拖动源的类型
    item: { id, text }, // 要传递给放置目标（Drop Target）的数据
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      {text}
    </div>
  );
}