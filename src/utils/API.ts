// import { useContext } from 'react';
import axios from 'axios';
// import { StoreContext } from '../store/storeProvider';

interface ShortDataMushroomReturn {
  anotherNames: string;
  application: string;
  id: string;
  polishName: string;
  scientificName: string;
  slug: string;
}

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: 'json',
});

export const getAllDataMushroom = () => {
  API.get('/mushroom').then((res) => {
    console.log(res);
  });
};

export const getShortDataMushroom = async (): Promise<
  ShortDataMushroomReturn[]
> => {
  return API.get('/mushroom/shortdata').then((res) => {
    // console.log(res);
    return res.data;
  });
};
