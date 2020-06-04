import axios from 'axios'

export default {
    state: {
        allUsers: [],
        user: {
            roles: []
        }
    },
    getters: {
        getUser: (state) => state.user,
        getAllUsers: (state) => state.allUsers,
        getAllUsernames: (state) => {
            let usernames = []
            state.allUsers.forEach(user => {
                usernames.push(user.username)
            });
            return usernames
        },
        /**
         * TODO в момента работи с закоментирания шит, обаче тогава админът не вижда юзърските неща. Трябва да гооправя
         */
        isUserIn: (state) => state.user.roles.includes("user"), /* && !state.user.roles.includes("admin"), */
        isAdmin: (state) => state.user.roles.includes("admin")
    },
    mutations: {
        ENROLL_USER(state, course) {
            state.user.enrolledCourses.push(course)
        },
        LOG_IN(state, user) {
            state.user = user
        },
        LOG_OUT(state) {
            state.user = {
                roles: []
            }
        },

        FETCH_ALL_USERS(state, user) {
            state.allUsers.push(user)
        }
    },
    actions: {
        enrollUserToCourse({ commit }, courseTitle) {
            commit('ENROLL_USER', courseTitle)
        },
        logOut({ commit }) {
            commit('LOG_OUT')
        },

        /*
        I fetch them, so that I can compare registration username with already existing usernames */
        fetchAllUsernames({ commit }) {
            axios
                .get('http://localhost:3000/users')
                .then(response => {
                    for (const user of response.data) {
                        commit('FETCH_ALL_USERS', user)
                    }
                })
        },

        registerUser({ commit }, newUser) {
            axios
                .post('http://localhost:3000/users', newUser)
                .then(() => {
                    commit('LOG_IN', newUser)
                })
        },

        logIn({ commit }, newUser) {
            commit('LOG_IN', newUser)
        }
    }, 
  }