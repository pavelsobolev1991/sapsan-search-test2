import React, { forwardRef } from 'react';
import { Flex } from 'antd';
import Photo from '../../components/Photo';
import EmptyResults from '../../components/EmptyResults';
import './searchResults.css';

interface SearchResultsProps {
  results: SearchAPI.Result[];
  isLoading: boolean;
}

const SearchResults: React.ForwardRefRenderFunction<
  HTMLImageElement,
  SearchResultsProps
> = ({ results, isLoading }, ref) => {
  return (
    <Flex
      wrap="wrap"
      gap="small"
      className="search-results-wrapper"
    >
      {results?.length ? (
        results.map((data, index) => {
          if (results.length === index + 1) {
            return <Photo ref={ref} key={data.id} src={data.urls} />;
          } else {
            return <Photo key={data.id} src={data.urls} />;
          }
        })
      ) : (
        <EmptyResults isLoading={isLoading} />
      )}
    </Flex>
  );
};

export default forwardRef(SearchResults);
