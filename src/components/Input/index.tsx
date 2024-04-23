import React, { useMemo, useState } from 'react';
import { Button, Form, Input } from 'antd';
import './input.css';
import { SearchOutlined, CloseCircleFilled } from '@ant-design/icons';

type SearchInputProps = {
  handleSearch: (value: string) => void;
};

const iconStyles = { color: '#C4C4C4' };

const SearchInput: React.FC<SearchInputProps> = ({ handleSearch }) => {
  const searchBtn = useMemo(
    () => (
      <Button type="primary" size="large" rootClassName="search-button" danger>
        Искать
      </Button>
    ),
    []
  );
  const prefix = useMemo(() => <SearchOutlined style={iconStyles} />, []);
  return (
    <Input.Search
      onSearch={handleSearch}
      prefix={prefix}
      placeholder="Телефоны, яблоки, груши..."
      enterButton={searchBtn}
      size="large"
      className="search-input"
      allowClear={{
        clearIcon: (
          <CloseCircleFilled className="closeIcon"></CloseCircleFilled>
        ),
      }}
    />
  );
};

export default SearchInput;
