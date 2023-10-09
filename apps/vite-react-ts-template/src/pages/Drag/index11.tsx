import { DraggableItem, DroppableArea } from './components'
function App() {
  const handleDrop = (item: any) => {
    console.log('放置的数据:', item);
  };

  return (
    <div>
      <h2>拖放示例</h2>
      <DraggableItem id={1} text="Item 1" />
      <DraggableItem id={2} text="Item 2" />
      <DroppableArea onDrop={handleDrop} />
    </div>
  );
}

export default App;