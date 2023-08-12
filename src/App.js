 
 import Button from "./Components/Button"

 export const App=()=>{
  let batchName = "vidya"
  let styleObj = {color:"red",textAlign:"center"}
  return (
    <div className="section">
      <h1 style={styleObj}>Hello world</h1>
      <p>welcome to the class.-{batchName}</p>
 

      <Button name="apple" quantity={10} store={["realiance","tata","vodafone"]} color="red"/>
  
   
     </div>
  )
}

 export default App