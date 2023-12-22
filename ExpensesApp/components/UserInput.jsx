export default function UserInput({title, type, id, placeHolder}){
  return (
    <div>
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id} placeholder={placeHolder}></input>
    </div>
  )  
}