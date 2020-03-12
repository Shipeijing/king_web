export default {
  namespace: "app",
  state: {
    a: 1
  },
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      return history.listen(({
        pathname,
        query
      }) => {
        if (pathname === '/topic') {
          dispatch({
            type: 'topIc/addAfter1Second'
          });
        }
      });
    }
  }
}
