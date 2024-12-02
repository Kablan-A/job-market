import { SearchForm } from '@/components/search/form';

export function Hero() {
  return (
    <section className="hero">
      <div className="flex w-full flex-col gap-5 sm:gap-10">
        <h1 className="text-4xl font-normal sm:text-5xl xl:text-6xl">
          Найди работу мечты
        </h1>
        <div className="flex w-full sm:w-2/3 md:w-8/12 xl:w-6/12">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
