import React from 'react';
import { theme } from '../../../../styles/theme';
import { IBaseProps } from '../../../../types/fc';
import { SvgIcon } from '../SvgIcon';

interface IProps extends IBaseProps {
  fill?: string;
}

export const Chart: React.FC<IProps> = ({
  className = '',
  dataCy = 'chart-icon',
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
      <path d='M60,55.2h-5.4V35.5c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2,0-5.7,2.6-5.7,5.7v19.7h-6V20.4c0-3.2-2.6-5.7-5.7-5.7h-5.8
	c-3.2,0-5.7,2.6-5.7,5.7v34.8H6.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v48.9c0,2.3,1.9,4.3,4.3,4.3h54c1.2,0,2.3-1,2.3-2.3
	S61.2,55.2,60,55.2z M18.7,55.2V20.4c0-0.7,0.6-1.2,1.2-1.2h5.8c0.7,0,1.2,0.6,1.2,1.2v34.8H18.7z M41.9,55.2V35.5
	c0-0.7,0.6-1.2,1.2-1.2h5.8c0.7,0,1.2,0.6,1.2,1.2v19.7H41.9z'/>
    </SvgIcon>
  );
};

