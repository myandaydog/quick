const getters = {
	userMobile: state => state.user.userMobile,
	passWord: state => state.user.passWord,
	menuList: state => {
      let menuList = sessionStorage.getItem('menuList')
      state.menuList = menuList
      return state.menuList
    }
}

export default getters