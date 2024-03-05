import React from 'react'

export default function Card(props) {
  return (
    <div className='Card'>
    {/* <<<<<<<<<<<<<<<<<<<<< */}
<div className="relative flex w-[250px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="relative flex justify-center flex-col mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
<img src={props.image} alt="profile-picture" />
    <h1 className='m-auto font-bold text-[20px]'>
    {props.time}
    </h1>
</div>
<div className="p-6 text-center">
<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {props.name}
</h4>
<h5>
</h5>
</div>
</div>
  </div>
  )
}
