import React, { forwardRef } from 'react';
import { Flex, List, Image } from 'antd';
import Photo from '../../components/Photo';
import EmptyResults from '../../components/EmptyResults';
import './searchResults.css';
import SearchField from '../SearchField';

interface SearchResultsProps {
  results: SearchAPI.Result[];
  isLoading: boolean;
}

const SearchResults: React.ForwardRefRenderFunction<
  HTMLImageElement,
  SearchResultsProps
> = ({ results, isLoading }, ref) => {
  return (
    <div className={results.length ? "gallery" : "empty-gallery"}>
      {results?.length ? (
        results?.map((data, index) => {
          if (results.length === index + 1) {
            return <Photo ref={ref} photoKey={data.id} src={data.urls} />;
          } else {
            return <Photo photoKey={data.id} src={data.urls} />;
          }
        })
      ) : (
        <EmptyResults isLoading={isLoading} />
      )}
    </div>
  );
};

export default forwardRef(SearchResults);
