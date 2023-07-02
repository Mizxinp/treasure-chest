function FormItem() {
  const handleClick = () => {
    console.log('12345');
  }
  return <div onClick={handleClick}>12345</div>
}

ReactDOM.hydrate(<FormItem />)