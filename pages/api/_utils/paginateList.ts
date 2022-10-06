function paginateList({ pageNumber, pageSize, items }) {
  const currentPageNumber = Number(pageNumber);
  const currentPageSize = Number(pageSize);

  return items.slice(
    (currentPageNumber - 1) * currentPageSize,
    (currentPageNumber - 1) * currentPageSize + (currentPageSize || items.length)
  );
}

export default paginateList;
