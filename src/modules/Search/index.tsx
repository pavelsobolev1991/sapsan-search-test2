import { useState, useRef, useCallback } from 'react';
import SearchResults from '../SearchResults';
import SearchField from '../SearchField';
import useSearchData from '../../hooks /useSearchData';

function Search() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, results, hasMore } = useSearchData(
    query,
    pageNumber
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPhotoRef = useCallback(
    (node: HTMLImageElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );
  

  const handleSearch = (value: string) => {
    if (value) {
      setQuery(value);
      setPageNumber(1);
    }
  };

  return (
    <>
      <SearchField
        query={query}
        handleSearch={handleSearch}
      />
      <SearchResults
        ref={lastPhotoRef}
        results={results}
        isLoading={isLoading}
      />
    </>
  );
}

export default Search;
