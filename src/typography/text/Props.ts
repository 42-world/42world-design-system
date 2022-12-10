import { Theme } from '../../common/type';

export type Props = {
  theme: Theme;
  size: 'header1' | 'header2' | 'header3' | 'header4' | 'body1' | 'body2' | 'body3' | 'caption';
  color: 'grey_40' | 'grey_50' | 'grey_60' | 'grey_70' | 'main_green_10' | 'red_10';
  align: 'left' | 'center' | 'right';
  text: string;
};