import * as React from 'react';

export function SearchForm() {
  const [search, setSearch] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <form className="flex w-full gap-8">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="search-bar"
          value={search}
          onChange={handleChange}
          placeholder="Профессия, должность или компания"
          required
        />
      </div>

      <div className="hidden md:block">
        <button
          type="submit"
          className="btn bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:ring-blue-800"
        >
          Найти
        </button>
      </div>
    </form>
  );
}
