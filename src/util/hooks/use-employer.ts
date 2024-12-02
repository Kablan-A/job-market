import { employers } from '@/data/employers';
import { useValidateId } from './use-validate-id';
import type { Employer } from '@/typings';

export function useEmployer(): Employer | undefined {
  const id = useValidateId(employers.length - 1);

  if (id || id === 0) return employers[id];
}
