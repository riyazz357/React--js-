import { useCallback, useState,useEffect,useRef } from 'react'


function App() {

  const [length,setLength]=useState(8)
  const [includeNumbers,setIncludeNumbers]=useState(false)
  const [includeCharacters,setIncludeCharacters]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)



const passwordGenerator=useCallback(()=>{

  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(includeNumbers) str+="0123456789"
  if(includeCharacters) str+="!@#$%^&*()_+"

  for(let i=0;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass);
  
},[length,includeNumbers,includeCharacters,setPassword])

const copyPasswordToClipboard=useCallback(()=>{

  passwordRef.current.select();
  passwordRef.current?.setSelectionRange(0,5);
   window.navigator.clipboard.writeText(password);
   
},[password])


useEffect(()=>{passwordGenerator()},[length,includeNumbers,includeCharacters,passwordGenerator])
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-orange-500">
      <h1 className='text-white text-center' my-3>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        ref={passwordRef}
        readOnly/>

        <button  onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-1xl'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          
          <input type="range" 
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label>Length: {length}</label>

        </div>

        <div className='flex item-center gap-x-1'>

          <input 
          type="checkbox" 
          checked={includeNumbers}
          onChange={()=>{setIncludeNumbers((prev)=>!prev);}}
          />
          <label>Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox" 
          checked={includeCharacters}
          onChange={()=>{setIncludeCharacters((prev)=>!prev);}}
          />
          <label>Characters</label>
          </div>


      </div>
     </div>
    </>
  )
}

export default App
