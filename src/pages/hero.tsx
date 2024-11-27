import { SearchForm } from '@/components/search/form';

export function Hero() {
  return (
    <div className="hero">
      <div className="flex w-full flex-col">
        <div className="mb-5 w-full sm:mb-10">
          <h1 className="text-4xl leading-10 text-gray-800 sm:text-5xl xl:text-6xl">
            Найди работу мечты
          </h1>
        </div>
        <div className="flex w-full sm:w-2/3 md:w-8/12 xl:w-6/12">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
