import GlobalAPI from '@/utils/GlobalAPI';
import React, { useEffect, useState } from 'react';

const useSlider = () => {
  const [SlidersList, setSlidersList] = useState([]);
  const getSliders = () => {
    GlobalAPI.getSliders().then((resp: any) => {
      setSlidersList(resp.data.data);
    });
  };
  useEffect(() => {
    getSliders();
  }, []);
  return SlidersList;
};

export default useSlider;
