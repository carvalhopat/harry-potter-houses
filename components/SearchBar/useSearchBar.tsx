import { useRouter } from 'next/router';
import debounceFunction from './helpers/debounceFunction';

function useSearchBar() {
  let debounced: ((...args: any[]) => Promise<unknown>) | (() => void) | null = null;

  const router = useRouter();
  const currentSearchedValue = router.query.q || '';
  const currentTermTypeValue =
    (typeof window !== 'undefined' && localStorage.getItem('termType')) || 'Name';

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

  const onChooseTermType = (termType) => {
    localStorage.setItem('termType', termType);

    router.push({ query: { ...router.query, termType: termType } });
  };

  const menuOptions = ['Name', 'Species'].filter((type) => type !== currentTermTypeValue);

  return {
    onSearchSubmit,
    onChooseTermType,
    onSearchTerm,
    currentSearchedValue,
    currentTermTypeValue,
    menuOptions
  };
}

export default useSearchBar;
