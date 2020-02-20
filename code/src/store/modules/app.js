import Cookies from 'js-cookie';
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    language:'ch',
    theme: 'default'
  },
  getters: {
    GetSelider: state => state.sidebar.opened,
    GetLanguage: state => state.language
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    SET_LANGUAGE:(state,val) => {
      state.language=val
    }
  },
  actions: {
    ToggleSideBar: ({
      commit
    }) => {
      commit('TOGGLE_SIDEBAR')
    },
    setTheme: ({
      commit
    }, theme) => {
      commit('SET_THEME', theme)
    }
  }
};

export default app;