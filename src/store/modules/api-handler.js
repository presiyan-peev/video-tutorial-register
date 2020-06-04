import axios from 'axios'

export default {
  state: {
    courses: [],
    lectures: [],
  },
  getters: {

    // sort the array of courses by enrolled users and then retrieve the first three
    getTopThreeCourses: (state) => state.courses.sort((a, b) => parseInt(b.usersEnrolledCount) - parseInt(a.usersEnrolledCount))
                                                .slice(0, 3),
    
    getAllCourses: (state) => state.courses,

    getAllPublicCourses: (state) => state.courses.filter(x => x.isPublic === true),

    getCourseByTitle: (state) => (title) => state.courses.find(x => x.title == title),

    getSingleLectureByTitle: (state) => (params) => state.lectures.filter(x => x.course.toLowerCase() == params.course.toLowerCase()).find(x => x.title == params.lecture),

    getLecturesByTitle: (state) => (title) => state.lectures.filter(x => x.course.toLowerCase() == title.toLowerCase())
  },
  mutations: {
    ADD_USER(state, params) {
      state.courses.find(x => x.title == params.courseTitle).usersEnrolled.push(params.username)
    },
    FETCH_LECTURES(state, val) {
      state.lectures.push(val)
    },
    FETCH_COURSES(state, val) {
      state.courses.push(val)
    }
  },
  actions: {
    addUserToCourse({commit}, params) {
      commit('ADD_USER', params)
    },

    fetchAllLectures({commit}) {
      axios
        .get('http://localhost:3000/lectures')
        .then(response => {
          for (const lecture of response.data) {
              commit('FETCH_LECTURES', lecture)
          }
      })
    },
    fetchAllCourses({commit}) {
      axios
        .get('http://localhost:3000/courses')
        .then(response => {
          for (const course of response.data) {
              commit('FETCH_COURSES', course)
          }
      })
    },

    // update data every 60 seconds by default
    fetchEduData({dispatch}) {
      dispatch('fetchAllCourses').then(
        setInterval(() => {
          dispatch('fetchAllCourses')
        }, 60000))
      dispatch('fetchAllLectures').then(
        setInterval(() => {
          dispatch('fetchAllLectures')
        }, 60000))  
    }
  },
}