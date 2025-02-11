import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    //network error fetch korar age loading dakachi
    setLoading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    //api call in console then all process check
    const imageSource = data.data.images.downsized_large.url;
    // console.log(imageSource);
    setGif(imageSource);
    //after fetch data loading false loading cannot show
    setLoading(false);
  }

  //data fetch ar jonno useeffect use
  useEffect(() => {
    fetchData('car');
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
