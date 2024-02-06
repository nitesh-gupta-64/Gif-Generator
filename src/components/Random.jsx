import React from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const Random = () => {

 const {loading, gif, fetchData} = useGif()

  return (
    <div className='bg-green-500 rounded-xl w-[700px] max-w-[90%] border border-black border-solid flex flex-col items-center'>
      <h1 className='m-auto mb-6 font-bold text-2xl underline mt-6'>A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button className='w-[80%] bg-white rounded-lg m-auto mt-6 py-3 mb-6' onClick={() => {fetchData()}}>Generate</button>
    </div>
  )
}

export default Random