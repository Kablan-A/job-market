import { useParams } from 'react-router-dom';

export function useValidateId(max: number): number | undefined {
  const { id } = useParams();
  if (!id) {
    return undefined;
  }

  const parsedId = parseInt(id);
  if (isNaN(parsedId) || parsedId < 0 || parsedId > max) {
    return undefined;
  }

  return parsedId;
}
