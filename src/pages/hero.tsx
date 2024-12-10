import { SearchForm } from '@/components/search/form';

export function Hero() {
  return (
    <div className="hero-bg">
      <section className="max-w hero">
        <div className="flex w-full flex-col gap-5">
          <div className="w-fit rounded-xl px-5 py-3 shadow-xl backdrop-blur-sm">
            <h1 className="text-4xl font-normal sm:text-5xl xl:text-6xl">
              Найди работу мечты
            </h1>
          </div>
          <div className="flex w-full sm:w-2/3 md:w-8/12 xl:w-6/12">
            <SearchForm />
          </div>
        </div>
      </section>
    </div>
  );
}
