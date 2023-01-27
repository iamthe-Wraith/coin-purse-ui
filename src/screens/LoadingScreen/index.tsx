import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../../components/svgs/icons/Spinner';
import { FlexCenter } from '../../styles';
import { IBaseProps } from '../../types/fc';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

const LoadingScreenContainer = styled(Screen)`
  ${FlexCenter}
`;

export const LoadingScreen: React.FC<IProps> = ({
  className = '',
  dataCy = '',
}) => {
  return (
    <LoadingScreenContainer
      className={ className }
      data-cy={ dataCy }
    >
      <Spinner animated dataCy='loading-screen-spinner'/>
    </LoadingScreenContainer>
  );
};
