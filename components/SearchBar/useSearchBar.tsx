import { useRouter } from 'next/router';
import debounceFunction from './helpers/debounceFunction';

function useSearchBar() {
  let debounced: ((...args: any[]) => Promise<unknown>) | (() => void) | null = null;

  const router = useRouter();
  const currentSearchedValue = router.query.q || '';
  const currentTermTypeValue = router.query.termType || '';

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;

    const onSetSearch = () => {
      const searchedValue = target.value;
      router.push({ query: { ...router.query, q: searchedValue } });
    };

    if (!debounced) {
      debounced = debounceFunction(onSetSearch, 450);
    }

    debounced();
  };

  const onChooseFilterType = (e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;
    const searchedValue = target.value;

    const { push } = router;
    push({ query: { ...router.query, termType: searchedValue } });
  };

  return {
    onSearchSubmit,
    onChooseFilterType,
    onSearchTerm,
    currentSearchedValue,
    currentTermTypeValue
  };
}

export default useSearchBar;
