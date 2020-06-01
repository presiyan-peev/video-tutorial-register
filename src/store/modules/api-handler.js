// import axios from 'axios'

export default {
  state: {
    courses: [
        { title: "Angular", description: "Lorem ipsum", imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg", isPublic: false, "lectures": [], usersEnrolled: [], usersEnrolledCount: 21 },
        { title: "React", description: "Lorem ipsum", imageUrl: "https://cdn.worldvectorlogo.com/logos/react.svg", isPublic: false, "lectures": [], usersEnrolled: [], usersEnrolledCount: 14 },
        { title: "nodejs", description: "Lorem ipsum", imageUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", isPublic: false, "lectures": [], usersEnrolled: [], usersEnrolledCount: 2 },
        { title: "Vue", description: "Lorem ipsum", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", isPublic: false, "lectures": [], usersEnrolled: [], usersEnrolledCount: 22 }
    ],
    lectures: [],
  },
  getters: {

    // sort the array of courses by enrolled users and then retrieve the first three
    getTopThreeCourses: (state) => state.courses.sort((a, b) => parseInt(b.usersEnrolledCount) - parseInt(a.usersEnrolledCount))
                                                .slice(0, 3)
  },
  mutations: {
    
  },
  actions: {
    
  },
}