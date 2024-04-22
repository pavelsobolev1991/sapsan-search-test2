import axios from 'axios';

export const fetchData = async (query:string, pageNumber=1, signal: AbortSignal) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs',
      query,
      page: pageNumber,
    },
    signal,
  });
  return response;
};
