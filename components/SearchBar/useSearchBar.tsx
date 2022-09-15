import { useRouter } from "next/router";
import debounceFunction from "./helpers/debounceFunction";

function useSearchBar({ onSearch }: any) {
  let debounced: ((...args: any[]) => Promise<unknown>) | (() => void) | null =
    null;

  const router = useRouter();
  const currentValue =
    typeof window !== "undefined" ? localStorage.getItem("searchedValue") : "";

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;

    onSearch({
      ...router.query,
      q: (target.querySelector("#search") as HTMLInputElement)!.value,
    });
  };

  const onTypeTerm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;

    const onSetSearch = () => {
      const searchedValue = target.value;

      const { push } = router;
      push({ query: { ...router.query, q: searchedValue } });
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

  return { onSearchSubmit, onChooseFilterType, onTypeTerm, currentValue };
}

export default useSearchBar;
