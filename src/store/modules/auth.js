// import axios from 'axios'

export default {
    state: {
        user: { username: "bai", password: "tosho", enrolledCourses: [], roles: ["user", "aadmin"] }
        /* user: {
            roles: []
        } */
    },
    getters: {
        getUser: (state) => state.user,
        isUserIn: (state) => state.user.roles.includes("user") && !state.user.roles.includes("admin"),
        isAdmin: (state) => state.user.roles.includes("admin")
    },
    mutations: {
        ENROLL_USER(state, course) {
            state.user.enrolledCourses.push(course)
        }
    },
    actions: {
        enrollUserToCourse({ commit }, courseTitle) {
            commit('ENROLL_USER', courseTitle)
        },
    },
  }