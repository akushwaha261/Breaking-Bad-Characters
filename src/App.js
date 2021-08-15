import { useEffect, useState } from 'react'
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import { fetchData } from "./service/api";
import Characters  from "./components/Characters";

const App = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  useEffect(() =>{
    const getData = async ()=>{
      const result=await fetchData(text)
      setData(result.data)
      console.log(result);
    }
    getData();
  },[text]);

  const getText= (text) =>{
    console.log(text);
    setText(text);
  }
  return (
    <Box>
      <Header getText={getText} />
      <Characters  data= {data}/>

    </Box>
  );
}

export default App;
