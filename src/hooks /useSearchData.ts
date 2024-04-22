import { useState, useEffect } from 'react';
import { fetchData } from '../api';

const useSearchData = (query: string, pageNumber = 1) => {
  const [results, setResults] = useState<SearchAPI.Result[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setResults([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    if (query) {
      fetchData(query, pageNumber, signal)
        .then((res) => {
          setResults((prev) => [...prev, ...res.data.results]);
          setHasMore(res.data.results.length > 0);
          setIsLoading(false);
        })
        .catch((e) => {
          if (e.name === 'AbortError') return;
          console.log(e)
        });
    }

    return () => controller.abort();
  }, [query, pageNumber]);

  return { isLoading, results, hasMore };
};

export default useSearchData;