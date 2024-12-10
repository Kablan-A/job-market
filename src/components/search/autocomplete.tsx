import * as React from 'react';
import { Input, InputProps } from '../input';
import { Link } from 'react-router-dom';
import { handleSearch } from '@/util/handle-search';
import { SearchResult } from '@/typings';
import { useDebounce } from '@/util/hooks/use-debounce';

interface AutocompleteProps {
  query: string;
  inputProps: InputProps;
}

export function Autocomplete({ query, inputProps }: AutocompleteProps) {
  const showRes = !!query.length;

  const debounceSearch = useDebounce(query, 350);
  const results = React.useMemo(
    () => handleSearch(debounceSearch),
    [debounceSearch],
  );

  return (
    <div className="relative flex w-full flex-col gap-3">
      <Input {...inputProps} />
      <div
        className={`${
          showRes ? 'block' : 'hidden'
        } absolute top-16 z-50 w-full transition-all duration-200 md:top-14`}
      >
        <Results results={results} />
      </div>
    </div>
  );
}

interface ResultsProps {
  results: SearchResult[];
}
function Results({ results }: ResultsProps) {
  return (
    <div className="flex max-h-[9.2rem] flex-col overflow-y-scroll rounded-lg border bg-base-100">
      {results.length ? (
        results.map((result, index) => {
          const to = `/search/${result.type}`;
          return (
            <Link key={index} to={to} className="btn-ghost p-3">
              {result.name}
            </Link>
          );
        })
      ) : (
        <p className="pointer-events-none p-3">No results</p>
      )}
    </div>
  );
}
