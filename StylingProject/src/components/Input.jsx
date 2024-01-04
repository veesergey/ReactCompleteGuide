export default function Input({ label, invalid, ...props }) {

let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase w-full";
let inputClasses = "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";

if (invalid) {
  labelClasses += " text-red-400";
  inputClasses += " border-red-300 text-red-500 bg-red-100";
}else{
  labelClasses += " text-stone-300";
  inputClasses += " text-gray-700 bg-stone-300";
}

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props}/>
    </p>
  );
}