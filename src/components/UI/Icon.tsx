import Image from 'next/image';
import React, { AriaAttributes, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const iconMap = {};

export type IconType = keyof typeof iconMap;

export interface IconProps extends AriaAttributes {
  type: IconType;
  quantity?: number;
  size?: number;
  width?: number;
  onClick?: () => void;
  className?: string;
  title?: string;
  alt?: string;
  href?: string;
  printable?: boolean;
  id?: string;
}

export const getIconSrc = (type: IconType): string => iconMap[type];

export const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  ({ type, size, width, className, alt = '', id, quantity, ...rest }, ref) => {
    const _size = size ?? 24;
    const _width = width ?? _size;
    const iconSrc = getIconSrc(type);
    const Container: keyof JSX.IntrinsicElements = rest?.href
      ? 'a'
      : rest?.onClick
        ? 'button'
        : 'span';
    const containerProps = useMemo(() => {
      if (Container === 'button') {
        const buttonProps = { type: 'button' };
        return buttonProps;
      }

      return {};
    }, [Container]);

    if (!iconSrc) {
      return null;
    }

    return (
      <Container
        {...rest}
        {...containerProps}
        className={twMerge('leading-none flex-none relative', className)}
      >
        <Image
          data-testid={id}
          className="h-full"
          ref={ref}
          src={iconSrc}
          width={_width}
          height={_size}
          alt={alt}
        />
        {typeof quantity === 'number' && quantity > 0 ? (
          <span className="flex justify-center items-center absolute bg-button-cta-yellow w-[24px] h-[24px] rounded-full text-center top-[-15px] right-[-12px] text-sm">
            {quantity}
          </span>
        ) : null}
      </Container>
    );
  }
);

Icon.displayName = 'Icon';
