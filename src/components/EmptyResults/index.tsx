import React from 'react';
import { Typography } from 'antd';
import './emptyResults.css';

const { Text } = Typography;

type EmptyResultsProps = {
  isLoading: boolean;
};

const EmptyResults: React.FC<EmptyResultsProps> = ({ isLoading }) =>
  !isLoading ? (
    <Text className="empty-results">К сожалению, поиск не дал результатов</Text>
  ) : null;

export default EmptyResults;
