import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl tracking-tight lg:text-6xl',
      h2: 'scroll-m-20 text-3xl tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl tracking-tight',
      h4: 'scroll-m-20 text-xl tracking-tight',
      h5: 'scroll-m-20 text-lg tracking-tight',
      h6: 'scroll-m-20 text-base tracking-tight',
      p: 'leading-7',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
      inlineCode: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
      lead: 'text-xl text-muted-foreground',
      largeText: 'text-lg',
      smallText: 'text-sm font-medium leading-none',
      mutedText: 'text-sm text-muted-foreground',
    },
    type: {
      poppins: 'font-poppins',
      montserrat: 'font-montserrat',
      'dm-sans': 'font-dm-snans',
      milston: 'font-milston',
      denike: 'font-denike',
      carola: 'font-carola',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      semibold: 'font-semibold',
      extra: 'font-extrabold',
    },
  },
  defaultVariants: {
    variant: 'p',
    type: 'poppins',
    weight: 'normal',
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<NonNullable<VariantPropType['variant']>, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  blockquote: 'blockquote',
  inlineCode: 'code',
  largeText: 'div',
  smallText: 'small',
  lead: 'p',
  mutedText: 'p',
  ul: 'ul',
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, type, weight, as, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div';
    return (
      <Comp
        className={cn(typographyVariants({ variant, type, weight, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };

