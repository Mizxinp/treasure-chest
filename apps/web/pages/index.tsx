import { Button } from "antd";
import ReactDOMServer from "react-dom/server";
import ReactDOM from 'react-dom';

export default function Web(props) {

  const handleClick = () => {
    console.log('jjjjjj', props);
    // const html = ReactDOMServer.renderToString(<FormItem />);
    // console.log('html', html);
    
  }
  return (
    <div>
      <h1>Web</h1>
      <Button onClick={handleClick} type="primary">nihao</Button>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("------")
  return {
    props: {name:"lisi"}, // will be passed to the page component as props
  }
}
