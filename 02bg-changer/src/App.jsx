import React, { useState } from 'react';
function App() {
  const [color,setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
      <div className='fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center shadow-xl justify-center bg-white px-3 py-3 rounded-2xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg' style={{backgroundColor:"red",color:"white"}}>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg' style={{backgroundColor:"green",color:"white"}}>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg' style={{backgroundColor:"blue",color:"white"}}>Blue</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg' style={{backgroundColor:"yellow",color:"white"}}>yellow</button>
          <button onClick={()=> setColor("black")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"black",color:"white"}}>Black</button>
          <button onClick={()=> setColor("brown")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"brown",color:"white"}}>Brown</button>
          <button onClick={()=> setColor("pink")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"pink",color:"white"}}>Pink</button>
          <button onClick={()=> setColor("grey")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"grey",color:"white"}}>Grey</button>
          <button onClick={()=> setColor("olive")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"olive",color:"white"}}>Olive</button>
          <button onClick={()=> setColor("purple")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"purple",color:"white"}}>Purple</button>
          <button onClick={()=> setColor("teal")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"teal",color:"white"}}>Teal</button>
          <button onClick={()=> setColor("navy")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"navy",color:"white"}}>Navy</button>
          <button onClick={()=> setColor("maroon")} className='outline-none px-4 m-1 rounded-full py-1 shadow-lg white' style={{backgroundColor:"maroon",color:"white"}}>Maroon</button>
          
       </div>
      </div>
    </div>
  )
}

export default App
