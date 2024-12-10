import { employers } from '@/data/employers';
import { vacancies } from '@/data/vacancies';
import { SearchResult, SearchType } from '@/typings';

export function handleSearch(query: string, type?: SearchType): SearchResult[] {
  if (!query.length) return [];

  if (type) {
    if (type === 'employer') return matchByType(query, employers, type);
    return matchByType(query, vacancies, type);
  }

  const employerMatches = matchByType(query, employers, 'employer');
  const vacancyMatches = matchByType(query, vacancies, 'vacancy');

  return [...employerMatches, ...vacancyMatches];
}

export function matchByType<T extends { id: string; name?: string }>(
  query: string,
  arr: T[],
  type: SearchType,
): SearchResult[] {
  return arr
    .filter(
      (entity) => entity.name?.toLowerCase().includes(query.toLowerCase()),
    )
    .map(
      (entity) =>
        ({
          type,
          id: entity.id,
          name: entity.name,
        }) as unknown as SearchResult,
    );
}
