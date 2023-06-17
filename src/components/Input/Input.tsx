import cx from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import { useControllableState } from './useControllableState';
import { Text } from '../Text';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  defaultValue?: string;
  subLabel?: string;
  variant?: 'outline' | 'filled';
  required?: boolean;
  hasError?: boolean;
  rightAddon?: ReactNode;
  onValueChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: idFromProps,
      label,
      value: valueFromProps,
      defaultValue,
      subLabel,
      variant,
      required,
      rightAddon,
      hasError,
      maxLength,
      onValueChange: onValueChangeFromProps,
      ...restProps
    },
    ref,
  ) => {
    const id = useId();
    const [value, setValue] = useControllableState({
      state: valueFromProps,
      defaultState: defaultValue ?? '',
      onChange: onValueChangeFromProps,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className="flex flex-col space-y-2">
        <div className="flex w-full">
          {label && (
            <label
              htmlFor={idFromProps ?? id}
              className={cx(
                'before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',
                {
                  'before:content-["*"]': required,
                },
              )}
            >
              {label}
            </label>
          )}
          {maxLength ? (
            <Text
              className="ml-auto"
              text={`(${value.length}/${maxLength})`}
              size="body2"
              weight="regular"
              color="secondary"
            />
          ) : null}
        </div>
        <div
          className={cx('flex items-center w-full rounded-lg px-4', {
            'border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200':
              variant === 'outline',
            'bg-bg-secondary dark:bg-bg-secondary_dark': variant === 'filled',
            'border-color-red focus-within:border-color-red': hasError,
          })}
        >
          <input
            ref={ref}
            id={idFromProps ?? id}
            className="w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark"
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            {...restProps}
          />
          {rightAddon && <span className="flex">{rightAddon}</span>}
        </div>
        {subLabel && <Text text={subLabel} size="body2" weight="regular" color={hasError ? 'red_200' : 'secondary'} />}
      </div>
    );
  },
);
