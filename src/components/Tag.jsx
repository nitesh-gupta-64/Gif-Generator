import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState("car");
  const { loading, gif, fetchData } = useGif(tag);

  return (
    <div className='bg-blue-500 rounded-xl w-[700px] max-w-[90%] border border-black border-solid flex flex-col items-center'>
      <h1 className='m-auto mb-6 font-bold text-2xl underline mt-6'>Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input className='w-[80%] bg-white rounded-lg m-auto mt-6 py-3 mb-6 pl-6'
        name='tag'
        value={tag}
        onChange={(event) => {setTag(event.target.value)}}
      />
      <button className='w-[80%] bg-white rounded-lg m-auto mt-6 py-3 mb-6' onClick={() => {fetchData(tag)}}>Generate</button>
    </div>
  )
}

export default Tag