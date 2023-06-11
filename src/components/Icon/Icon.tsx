import cx from 'classnames';

import { createElement, FunctionComponent, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

export function Icon({ svg, size, ...rest }: Props) {
  const wh = {
    xsmall: { width: 12, height: 12 },
    small: { width: 16, height: 16 },
    medium: { width: 20, height: 20 },
    large: { width: 24, height: 24 },
    xlarge: { width: 32, height: 32 },
  }[size] || { width: 24, height: 24 };

  return createElement(svg, {
    width: wh.width,
    height: wh.height,
    ...rest,
  });
}
