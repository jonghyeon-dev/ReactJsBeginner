import { useState, useEffect } from "react";

function Hello(){
  function byeFn(){
    console.log("Bye :(");
  };
  function hiFn(){
    console.log("Hi :)");
    //Cleanup Function은 자주 쓰이지 않음 특별한 상황에서만 쓰임
    return byeFn;
  };
  useEffect(hiFn,[]);
  // Cleanup Function : useEffect안에서 return function
  // Component가 사라지거나 없어질때 뭔가 보고 싶거나 뭔가 보여주고 싶을때
  // 언제 Component가 생성됬는지 삭제되었는지 확인 가능
  useEffect(()=>{
    console.log("Created :)");
    return ()=>{ console.log("Destroyed :(");}
  },[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = ()=>{setShowing((prev) => {return !prev})};
  return (
    <div>
      {showing? <Hello />: null}
      <button
      onClick = {onClick}>{showing? "Hide":"Show"}</button>
    </div>
  );
}


export default App;