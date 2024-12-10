import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
