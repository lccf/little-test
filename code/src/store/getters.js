const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  base_uri: () => ROOT_API.base_uri,

  user_name: state => state.user.user_name
};
export default getters