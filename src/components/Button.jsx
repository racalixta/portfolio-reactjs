import { cloneElement } from "react"

export const Button = ({ children, icon, type="primary" }) => {
  const standard = 'flex justify-center items-center gap-3 font-bold px-4 py-2 rounded-lg text-xl ';
  const primary = 'bg-orange-600 text-white hover:bg-indigo-600'
  const secondary = 'border-2 border-orange-600 text-white hover:bg-indigo-600 hover:border-indigo-600'
  let value;

  if(type === 'primary') {
    value = primary;
  } else if(type === 'secondary') {
    value = secondary;
  }

  return (
    <button className={standard + value}>
      <span>
        {children}
      </span>
      { icon && cloneElement(icon, { className: 'fill-white w-7 h-7' }) }
    </button>
  )

}
