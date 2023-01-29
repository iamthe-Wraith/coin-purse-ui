import React from 'react';
import styled from 'styled-components';
import { rotate } from '../../../../styles/animations/rotate';
import { theme } from '../../../../styles/theme';
import { IBaseProps } from '../../../../types/fc';
import { SvgIcon } from '../SvgIcon';


interface IProps extends IBaseProps {
  fill?: string;
  animated?: boolean;
}

const SpinnerSvg = styled(SvgIcon)`
  &.animated {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Spinner: React.FC<IProps> = ({
  className = '',
  dataCy = 'spinner-icon',
  fill = theme.colors.neutral[100],
  animated,
}) => {
  return (
    <SpinnerSvg
      className={ `${className} ${animated ? 'animated' : ''}` }
      data-cy={ dataCy }
      width={ 64 }
      height={ 64 }
      fill={ fill }
    >
      <g>
        <path d='M32,62.3C15.3,62.3,1.8,48.7,1.8,32S15.3,1.8,32,1.8c4.6,0,9.1,1,13.2,3c1.1,0.5,1.6,1.9,1,3c-0.5,1.1-1.9,1.6-3,1
		C39.7,7.1,35.9,6.3,32,6.3C17.8,6.3,6.3,17.8,6.3,32c0,14.2,11.6,25.8,25.8,25.8c9.9,0,18.8-5.6,23.2-14.5
		c1.7-3.5,2.6-7.3,2.6-11.2c0-2.6-0.4-5.2-1.2-7.7c-0.4-1.2,0.3-2.4,1.5-2.8c1.2-0.4,2.4,0.3,2.8,1.5c0.9,2.9,1.4,6,1.4,9.1
		c0,4.6-1,9.1-3,13.2C54.1,55.7,43.7,62.3,32,62.3z'/>
      </g>
    </SpinnerSvg>
  );
};
