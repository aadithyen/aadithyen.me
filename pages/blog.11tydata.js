export default {
  pagination: {
    data: "collections.posts",
    size: 10,
    before: (items) =>
      [...items].sort((a, b) => Number(b.data.id) - Number(a.data.id)),
  },
  permalink: (data) => {
    const n = data.pagination.pageNumber;
    return n == 0 ? "/blog/" : `/blog/page/${n + 1}/`;
  },
};
