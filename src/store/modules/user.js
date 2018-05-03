const user = {
	state: {
		userMobile: '',
		passWord: '',
		menuList: []
	},
	mutations:{
		setMobile(state, userMobile){
			state.userMobile = userMobile
		},
		setPassWord(state, passWord){
			state.passWord = passWord
		},
		setMenuList (state, menuList) {
	      sessionStorage.setItem('menuList', menuList)
	      state.menuList = menuList
    	}
	},
}
export default user