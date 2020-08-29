import axios from 'axios'

const COURSE_API_URL = 'http://localhost:1111'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/materials`

export class CourseDataService {

    async retrieveAllCourses() {
        //console.log('executed service')

        return axios.get(`${INSTRUCTOR_API_URL}/`);
    }

    retrieveCourse(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`).then(res =>{
            //console.log(res.data)
            return res.data
        })
    }

    async deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`).then(resp => {
            return resp.data
        });
    }

    async updateCourse(id, material) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, material);
    }

    async createCourse(material) {
        //console.log('executed service')
        return axios.post(`http://localhost:1111/materials/`, material);
    }
};

export default new CourseDataService();