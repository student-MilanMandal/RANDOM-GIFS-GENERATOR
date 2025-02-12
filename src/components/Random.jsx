import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="md:w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] sm:w-1/3">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold ">
        A Random Gif
      </h1>

      {/* //spinner chechk true spinner false image */}

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} className="sm:w-[150px] md:w-[450px]" />
      )}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg font-bold uppercase mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
