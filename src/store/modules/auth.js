import axios from 'axios'

export default {
    state: {
        allUsernames: [],
        user: {
            roles: []
        }
    },
    getters: {
        getUser: (state) => state.user,
        getAllUsernames: (state) => state.allUsernames,
        isUserIn: (state) => state.user.roles.includes("user") && !state.user.roles.includes("admin"),
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

        ADD_AN_USERNAME(state, username) {
            state.allUsernames.push(username)
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
                        commit('ADD_AN_USERNAME', user.username)
                    }
                })
        },

       /*  registerUser({ commit }, newUser) {
            console.log(`1st newUser: `)
            console.log(newUser)
            axios
                .post('http://localhost:3000/users', newUser)
                .then(() => {
                    console.log(`2nd newUser: ${newUser}`)
                    commit('LOG_IN', newUser)
                })
        } */

        registerUser({ commit }, newUser) {
            axios({
                method: 'post',
                url: 'http://localhost:3000/users',
                data: newUser
            })
                .then(() => {
                    commit('LOG_IN', newUser)
                })
        }
    }, 
  }