import cx from 'classnames';
import type { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'primary' | 'secondary';
}

export function Divider({ variant = 'primary', className, ...restProps }: DividerProps) {
  return (
    <div
      className={cx(
        'h-[1px] w-full',
        {
          'bg-border-primary dark:bg-border-primary_dark': variant === 'primary',
          'bg-border-secondary dark:bg-border-secondary_dark': variant === 'secondary',
        },
        className,
      )}
      {...restProps}
    />
  );
}
