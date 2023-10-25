"use client"
import React from 'react'

const AddToCard = () => {
  return (
<div className="p-5 bg-sky-400 w-30 text-white text-xl hover:bg-slate-500">
<button onClick={()=>{console.log("clicked")}}>Add to Card</button>
</div>
  )
}

export default AddToCard