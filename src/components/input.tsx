import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export function Input({ startIcon, endIcon, ...rest }: InputProps) {
  return (
    <div className="input input-bordered relative flex w-full items-center gap-2">
      {startIcon && startIcon}
      <input {...rest} className="peer grow text-ellipsis" />
      {endIcon && endIcon}
    </div>
  );
}
