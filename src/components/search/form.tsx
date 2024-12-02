import * as React from 'react';
import { Autocomplete } from './autocomplete';

const magnifyingGlass = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-5 w-5 opacity-70"
  >
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export function SearchForm() {
  const [search, setSearch] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <form className="flex w-full gap-5">
      <Autocomplete
        inputProps={{
          type: 'search',
          placeholder: 'Профессия, должность или компания',
          startIcon: magnifyingGlass,
          id: 'default-search',
          value: search,
          onChange: handleChange,
          required: true,
        }}
      />

      <div className="hidden md:inline-block">
        <button type="submit" className="btn btn-primary">
          Найти
        </button>
      </div>
    </form>
  );
}
