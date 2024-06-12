import { YellowIcon } from "./Icons";
import React, { useRef, useEffect, useState } from 'react';

const Instruction = ({ title, buttonText, description }) => {
  const textareaRef = useRef(null);
  const [value, setValue] = useState('');

  const autoExpand = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    autoExpand();
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section className="flex flex-col m-4 space-y-4">
      <h2 className='text-[#afafb1]'>{title}</h2>
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          className="block w-full py-6 px-3 bg-[#343434] text-[#b0b0b0] border border-gray-600 rounded resize-none overflow-hidden rounded-lg focus:outline-none focus:border-white placeholder-transparent peer"
          placeholder=" "
          rows="1"
          onInput={autoExpand}
        />
          <label htmlFor="description" className="absolute top-1 left-3 text-gray-400 text-sm">
          {description}
        </label>
      </div>
      <button className='bg-gradient-to-b from-[#505050] to-[#414141] flex justify-center items-center w-full h-12 rounded-lg border-2 border-[#4f4f4f] space-x-2'>
        <YellowIcon />
        <p className='text-white'>{buttonText}</p>
      </button>
    </section>
  );
}


export default Instruction;
