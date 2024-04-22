import React from 'react';
import { Flex } from 'antd';
import SearchInput from '../../components/Input';
import './search.css';

type SearchProps = {
  query: string;
  handleSearch: (value: string) => void;
};

const SearchField: React.FC<SearchProps> = ({
  query,
  handleSearch,
}) => {
  return (
    <Flex
      wrap="wrap"
      gap="small"
      className={query ? 'search-active' : 'search'}
    >
      <SearchInput handleSearch={handleSearch}/>
    </Flex>
  );
};

export default SearchField;
