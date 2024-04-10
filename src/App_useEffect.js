import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const [searchWord,setSearchWord] = useState("");

  const onClick = ()=>{
    setValue((prev)=>{ 
      return prev+1
    })
  };

  const onChange = (event)=>{ 
    setSearchWord(event.target.value)
  };

  // console.log("I Run All The Time.");
  // useEffect : 랜더링 될때 한 딱한번만 실행하고 state 변경으로 리랜더링 될때는 실행되지 않음
  useEffect(()=>{console.log("I run only once")},[]);// 한번만 실행
  // useEffect.deps : 두번째 param인 dependencyList 항에 state 를 넣으면 해당 state 변화를 감시하여 해당 state가 변화할때만 함수 실행
  useEffect(()=>{
    console.log("I run when 'searchWord' Changes");
  },[searchWord]);// searchWord 변경시 실행
  useEffect(()=>{
    console.log("I run when 'counter' Changes");
  },[counter]);// counter 변경시 실행
  // 여러개의 state 를 동시에 감시가능
  useEffect(()=>{
    console.log("I run when searchWord & counter Changes");
  },[counter,searchWord]); // counter or searchWord 변경시 실행
  return (
    <div> 
      <input type="text" value={searchWord} placeholder="Search hear..." onChange={onChange}/>
      <h1>Welcome! {counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}


export default App;