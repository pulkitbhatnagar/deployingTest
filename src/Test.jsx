import { forwardRef, useRef, useImperativeHandle } from "react";
 

const Child = forwardRef((props, ref) => {
  function handleSubmit() {
    console.log("I am called");
  }
  useImperativeHandle(ref, () => {
    return {
      "fun1":handleSubmit,
      "fun2":handleSubmit
    };
  });

  return <button>I am cllidked</button>;
});

export default function App2() {
  const ref = useRef();
  console.log("===", ref);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happeghgggn!</h2>
      <div style={{height:'500px',width:'500px',border:'3px solid red',margin:'20px',display:'flex'}}>
        <div style={{height:'100px',width:'100px',border:'3px solid blue',margin:'30px',display:'flex'}}></div>
        <a href="google.com" t><p>Hello world</p></a>
      </div>
      <Child ref={ref}/>
      
    </div>
  );
}
