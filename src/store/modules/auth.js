// import axios from 'axios'

export default {
    state: {
        // user: { username: "bai", password: "tosho", enrolledCourses: [], roles: ["user", "admin"] }
        user: {
            roles: []
        }
    },
    getters: {
        getUser: (state) => state.user,
        isLoggedIn: (state) => state.user.roles.length > 0,
        isAdmin: (state) => state.user.roles.includes("admin")
    },
    mutations: {
      
    },
    actions: {
      
    },
  }