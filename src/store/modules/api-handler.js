import axios from 'axios'

export default {
  state: {
    courses: [],
    lectures: [],

    playingLecture: {},
  },
  getters: {

    // sort the array of courses by enrolled users and then retrieve the first three
    getTopThreeCourses: (state) => state.courses.sort((a, b) => parseInt(b.usersEnrolledCount) - parseInt(a.usersEnrolledCount))
                                                .filter(x => x.isPublic === true)
                                                .slice(0, 3),
    
    getAllCourses: (state) => state.courses,

    getAllCoursesTitles: (state) => {
      let courseTitles = []
      state.courses.forEach(course => {
        courseTitles.push(course.title)
      });
      return courseTitles
    },

    getAllPublicCourses: (state) => state.courses.filter(x => x.isPublic === true),

    getCourseByTitle: (state) => (title) => state.courses.find(x => x.title == title && x.isPublic === true),

    getSingleLectureByTitle: (state) => (params) => state.lectures.filter(x => x.course.toLowerCase() == params.course.toLowerCase()).find(x => x.title == params.lecture),

    getLecturesByTitle: (state) => (title) => state.lectures.filter(x => x.course.toLowerCase() == title.toLowerCase()),

    getAllLecturesTitles: (state) => {
      let lectureTitles = []
      state.lectures.forEach(lecture => {
        lectureTitles.push(lecture.title)
      });
      return lectureTitles
    },
  },
  mutations: {
    ADD_USER(state, params) {
      state.courses.find(x => x.title == params.courseTitle).usersEnrolled.push(params.username)
    },
    ADD_NEW_COURSE(state, val) {
      state.courses.push(val)
    },
    UPDATE_COURSE(state, val) {
      state.courses.find(x => x.id === val.id).title = val.title
      state.courses.find(x => x.id === val.id).description = val.description
      state.courses.find(x => x.id === val.id).imageUrl = val.imageUrl
      state.courses.find(x => x.id === val.id).isPublic = val.isPublic

      // i do this so that I can trigger the watcher in EditCourseForm
      state.courses.reverse()
    },
    INCREMENT_COURSE_LECTURES(state, val){
      state.courses.find(x => x.title === val).lecturesCount += 1
    },
    DECREMENT_COURSE_LECTURES(state, val) {
      state.courses.find(x => x.title === val).lecturesCount -= 1
    },
    ADD_NEW_LECTURE(state, val) {
      state.lectures.push(val)
    },
    REMOVE_LECTURE(state, val) {
      const lectureIndex = state.lectures.findIndex(x => x.title === val)
      state.lectures.splice(lectureIndex, 1)
    },
/* 
    PLAY_LECTURE(state, val) {
      state.playingLecture = state.lectures.filter(x => x.course.toLowerCase() == val.toLowerCase()).find(x => x.title == val.lecture)
    }, */

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

    createCourse({ commit }, course) {
      axios
        .post('http://localhost:3000/courses', course)
        .then(() => {
          commit('ADD_NEW_COURSE', course)
        })  
    },

    editCourse({ commit }, params) {
      axios
        .patch(`http://localhost:3000/courses/${params.id}`, params)
        .then(() => {
          commit('UPDATE_COURSE', params)
        }) 
    },

    createLecture({ commit }, lecture) {
      axios
        .post('http://localhost:3000/lectures', lecture)
        .then(() => {
          commit('ADD_NEW_LECTURE', lecture)
          commit('INCREMENT_COURSE_LECTURES', lecture.course)
        })  
    },

    removeLecture({ commit }, params) {
      axios
        .delete(`http://localhost:3000/lectures/${params.lectureId}`)
        .then(() => {
          commit('REMOVE_LECTURE', params.lectureId)
          commit('DECREMENT_COURSE_LECTURES', params.course)
        })  
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

    // updates data (lectures and courses) every 60 seconds by default
    fetchEduData({dispatch}) {
      dispatch('fetchAllCourses')
      dispatch('fetchAllLectures')
    }
  },
}