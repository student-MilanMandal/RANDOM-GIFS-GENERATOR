import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('');

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="md:w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] sm:w-1/3">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">
        Random {tag} Gif
      </h1>

      {/* //spinner chechk true spinner false image */}

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} className="sm:w-[150px] md:w-[450px]" />
      )}

      <input
        className="w-10/12 text-lg py-2 rounded-lg  mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        placeholder="Enter GIFS Name "
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg font-bold uppercase mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
