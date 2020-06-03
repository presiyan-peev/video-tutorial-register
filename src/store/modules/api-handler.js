// import axios from 'axios'

export default {
  state: {
    courses: [
        { title: "Angular", description: "Lorem ipsum", imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg", isPublic: true, "lectures": [], usersEnrolled: ["baio"], usersEnrolledCount: 21, lecturesCount: 3 },
        { title: "React", description: "Lorem ipsum", imageUrl: "https://cdn.worldvectorlogo.com/logos/react.svg", isPublic: true, "lectures": [], usersEnrolled: [], usersEnrolledCount: 14, lecturesCount: 3 },
        { title: "nodejs", description: "Lorem ipsum", imageUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", isPublic: true, "lectures": [], usersEnrolled: [], usersEnrolledCount: 2, lecturesCount: 3 },
        { title: "Vue", description: "Lorem ipsum", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", isPublic: true, "lectures": [], usersEnrolled: [], usersEnrolledCount: 22, lecturesCount: 3 }
    ],
    lectures: [
      { title: "Introduction", videoUrl: "https://www.youtube.com/embed/0eWrpsCLMJQ", course: "Angular" },
      { title: "Components", videoUrl: "https://www.youtube.com/embed/16rQyEQtpyQ", course: "Angular" },
      { title: "Interpolation", videoUrl: "https://www.youtube.com/embed/2a6OfacW_-I", course: "Angular" },
      { title: "Introduction", videoUrl: "https://www.youtube.com/embed/DyndGu0fPSE", course: "Vue" },
      { title: "Components", videoUrl: "https://www.youtube.com/embed/AhqJ95Y7-ko", course: "Vue" }
    ],
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
    }
  },
  actions: {
    addUserToCourse({commit}, params) {
      commit('ADD_USER', params)
    }
  },
}