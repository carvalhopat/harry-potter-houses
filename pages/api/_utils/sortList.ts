function sortList(sortType: string) {
  return function (a: any, b: any) {
    if (a[sortType] < b[sortType]) {
      return -1;
    }
    if (a[sortType] > b[sortType]) {
      return 1;
    }
    return 0;
  };
}

export default sortList;
