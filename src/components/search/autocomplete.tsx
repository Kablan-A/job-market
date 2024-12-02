import { Input, InputProps } from '../input';

interface AutocompleteProps<T extends unknown> {
  searchData?: T[];
  inputProps: InputProps;
}

export function Autocomplete<T>({
  searchData,
  inputProps,
}: AutocompleteProps<T>) {
  // console.log(searchData);
  return <Input {...inputProps} />;
}
