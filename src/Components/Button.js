const Button=({name,quantity,store,color})=>{
    return (
  <div>
    <button style={{backgroundColor:color}}>
        {name}
    </button>
    <p>we have {quantity} in stocks</p>
    <p>Location:{store.join(",")}</p>
  </div>
    )
}
export default Button