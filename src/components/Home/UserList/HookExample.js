import React,{useState,useEffect,useRef} from 'react';

const StepTwo = () => {

  const [searchTerm,setSearchTerm] = useState('');
  const focusElement = useRef(null);
  useEffect(()=> {focusElement.current.focus();},[]);
  return(
    <div>
      <h1>Step 2</h1>
      <input
        placeholder="Dad jokes Search"
        ref={focusElement}
        onChange={e=>setSearchTerm(e.target.value)}
        value={searchTerm} type='text'
      />
    </div>
  );
};
export default StepTwo;