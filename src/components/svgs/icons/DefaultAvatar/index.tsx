import React from 'react';
import { theme } from '../../../../styles/theme';
import { IBaseProps } from '../../../../types/fc';
import { SvgIcon } from '../SvgIcon';


interface IProps extends IBaseProps {
  fill?: string;
}

export const DefaultAvatar: React.FC<IProps> = ({
  className = '',
  dataCy = 'default-avatar-icon',
  fill = theme.colors.neutral[100],
}) => {
  return (
    <SvgIcon
      className={ className }
      data-cy={ dataCy }
      width={ 64 }
      height={ 64 }
      fill={ fill }
    >
      <g>
        <path d='M32,36.8c8.3,0,15-6.7,15-15s-6.7-15-15-15c-8.3,0-15,6.7-15,15S23.7,36.8,32,36.8z M32,11.3c5.8,0,10.5,4.7,10.5,10.5
          S37.8,32.3,32,32.3c-5.8,0-10.5-4.7-10.5-10.5S26.2,11.3,32,11.3z'/>
        <path d='M61.5,53.2C53.3,46.3,42.9,42.5,32,42.5S10.7,46.3,2.5,53.2c-0.9,0.8-1.1,2.2-0.3,3.2c0.8,0.9,2.2,1.1,3.2,0.3
          C12.8,50.4,22.2,47,32,47c9.8,0,19.2,3.4,26.5,9.6c0.4,0.4,0.9,0.5,1.5,0.5c0.6,0,1.3-0.3,1.7-0.8C62.5,55.4,62.4,54,61.5,53.2z'/>
      </g>
    </SvgIcon>
  );
};
