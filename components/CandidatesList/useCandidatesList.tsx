import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { includes, toLower, isEmpty } from "ramda";
import dynamic from "next/dynamic";
import TListData from "../../types/TListData";

const mappedTermTypes = {
  name: "name",
  status: "status",
};

function useCandidatesList({ data }: { data: any }) {
  const [matches, setMatches] = useState([] as TListData[]);

  const router = useRouter();
  const savedTypedValue =
    typeof window !== "undefined" ? localStorage.getItem("searchedValue") : "";
  const {
    query: { termType = "name", q = savedTypedValue },
  } = router;

  const getNewMatches = useCallback(
    (q: string) =>
      data?.filter((item: any) => {
        localStorage.setItem("searchedValue", q);
        return includes(
          q,
          item[termType as keyof typeof mappedTermTypes].toLowerCase()
        );
      }),
    [termType, data]
  );

  useEffect(() => {
    if (q) {
      const newMatches = getNewMatches(q as string);
      setMatches(newMatches);
    } else {
      localStorage.setItem("searchedValue", "");
      setMatches(data);
    }
  }, [termType, q, getNewMatches, data]);

  const onSearch = ({ q = "" }) => {
    if (!isEmpty(q)) {
      const query = toLower(q);
      const newMatches = getNewMatches(query);
      setMatches(newMatches);
    } else {
      setMatches([]);
    }
  };

  // function compare(a: any, b: any ) {
  //   if ( a.name < b.name ){
  //     return -1;
  //   }
  //   if ( a.name > b.name ){
  //     return 1;
  //   }
  //   return 0;
  // }

  const Table = dynamic(() => import("../Table"), { ssr: false });

  return { onSearch, setMatches, matches, Table };
}

export default useCandidatesList;
