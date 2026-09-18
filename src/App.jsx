import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {ArrowLeft , ArrowRight} from 'lucide-react'

import axios from 'axios'

function App() {
const [list, setlist] = useState([])
const [page,setpage] = useState(0)

const getdata=async ()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=32`)
    console.log(response.data)
    setlist(response.data)
}

useEffect(()=>{
    getdata();
    console.log("useeffect is running")
},[page])
  
return ( 
<div className='flex flex-col items-center '>
     <div className="heading flex justify-center w-full bg-black p-4">
         <h1 className='text-7xl bg-black text-white'>Gallary</h1>

     </div>
<div className="gallery min-h-screen w-full bg-black flex flex-wrap gap-4 justify-center p-5">
    
  {list.map((elem, idx) => {
    return (
      <div
        key={idx}
        className="image w-full sm:w-[45%] md:w-[30%] lg:w-[22%]  overflow-hidden"
      >
        <div className="w-full h-64 sm:h-72 md:h-80 hover:scale-105 transition-transform duration-300 ">
          <img
            className="w-full h-full object-cover rounded-xl cursor-pointer "
            src={elem.download_url}
            alt={elem.author}
          />
        </div>

        <h1 className="p-3 text-2xl text-center text-white font-semibold">
          {elem.author} 
        </h1>
      </div>
    );
  })}
</div>
   
  <div className="btns  w-full flex gap-10 justify-center pt-20 pb-10  bg-black ">
    <button onClick={()=>{
        if(page>1){
            setpage(page-1)
        }
    }} className='px-10 py-3 bg-red-500 text-white font-semibold active:scale-95'><ArrowLeft /> Prev</button>
    <button onClick={()=>{
        setpage(page+1)
    }} className='px-10 py-3 bg-red-500 text-white font-semibold active:scale-95'><ArrowRight /> Next</button>
     
  </div >
      <div className='bg-black w-full flex justify-center'>
        <h1 className='text-3xl text-white font-bold bg-red-500 px-6 py-4 mb-10 rounded-full  '>{page}</h1>
      </div>

 </div>







)
   
}

export default App
