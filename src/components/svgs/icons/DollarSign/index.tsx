import React from 'react';
import { theme } from '../../../../styles/theme';
import { IBaseProps } from '../../../../types/fc';
import { SvgIcon } from '../SvgIcon';


interface IProps extends IBaseProps {
  fill?: string;
  animated?: boolean;
}

export const DollarSign: React.FC<IProps> = ({
  className = '',
  dataCy = '',
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
      <path d='M39.5,29.8h-15c-4.9,0-9-3.8-9-8.5s4-8.5,9-8.5h22.1c1.2,0,2.2-1,2.2-2.2s-1-2.2-2.2-2.2H36.2V4c0-1.2-1-2.2-2.2-2.2
	c-1.2,0-2.2,1-2.2,2.2v4.2h-7.2c-7.4,0-13.5,5.8-13.5,13s6,13,13.5,13h15c4.9,0,9,3.8,9,8.5s-4,8.5-9,8.5H14.2c-1.2,0-2.2,1-2.2,2.2
	s1,2.2,2.2,2.2h17.5V60c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2v-4.2h3.2c7.4,0,13.5-5.8,13.5-13S46.9,29.8,39.5,29.8z'/>
    </SvgIcon>
  );
};
