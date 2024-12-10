import * as React from 'react';
import { Autocomplete } from './autocomplete';
import { SearchType } from '@/typings';
// import { useNavigate } from 'react-router-dom';

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

interface SearchFormProps {
  searchType: SearchType;
}

export function SearchForm({ searchType }: SearchFormProps) {
  const [search, setSearch] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // navigate(`/search/${searchType ? searchType : 'vacancy'}?search=${search}`);
  };

  // const navigate = useNavigate();
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearch(value);
    },
    [],
  );

  return (
    <form
      className="flex w-full gap-5"
      autoComplete="off"
      onSubmit={handleSubmit}
      action={`/search/${searchType ? searchType : 'vacancy'}?search=${search}`}
    >
      <Autocomplete
        query={search}
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
