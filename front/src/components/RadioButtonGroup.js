import React from "react"

const RadioButtonGroup = ({ name, labelText, options, onChange }) => {
  const isLastOption = index => index + 1 >= options.length

  return (
    <div className="mb-3">
      <label className="block mb-2 text-sm font-medium">{labelText}</label>
      <ul className="items-center w-full  text-sm font-medium bg-inherit border border-[#ddcdaa] rounded-lg">
        {options.map((option, index) => {
          const optionId = `${name}-${option.name}`
          return (
            <li key={optionId} className={`w-full border-[#ddcdaa] rounded-t-lg ${!isLastOption(index) && 'border-b'}`}>
              <div className="flex items-center pl-3 hover:border-[#ceb886]">
                <input type="radio" className='accent-[#ddcdaa] w-4 h-4 bg-[#011b17] border-[#ddcdaa] focus:ring-[#ddcdaa] focus:ring-1'
                  id={optionId} name={name} value={option.value} onChange={onChange} />
                <label htmlFor={optionId} className='w-full py-3 ml-2 text-sm font-medium hover:text-[#ceb886]'>
                  {option.text} 
                </label>
              </div>
            </li>
          )
        })}
      </ul>        
    </div>
  )
}

export default RadioButtonGroup