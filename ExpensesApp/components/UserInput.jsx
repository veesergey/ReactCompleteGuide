export default function UserInput({title, type, id, placeHolder, onChange}){
  return (
    <div>
        <label htmlFor={id}>{title}</label>
        <input onChange={onChange} type={type} id={id} placeholder={placeHolder}></input>
    </div>
  )  
}