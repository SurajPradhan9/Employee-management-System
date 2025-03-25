import React from 'react'

const NewTask = () => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">Jan 9 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold"> Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos
          sint excepturi tempore mollitia vitae.
        </p>
        <div className='mt-4'>
            <button className='bg-blue-500 py-1 px-2 text-sm w-full'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask