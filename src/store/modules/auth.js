// import axios from 'axios'

export default {
    state: {
        // user: { username: "bai", password: "tosho", enrolledCourses: [], roles: ["user", "admin"] }
        user: null
    },
    getters: {
        getUser: (state) => state.user,
        isLoggedIn: (state) => state.user !== null,
        isAdmin: (state) => state.user.roles.containes("admin")
    },
    mutations: {
      
    },
    actions: {
      
    },
  }