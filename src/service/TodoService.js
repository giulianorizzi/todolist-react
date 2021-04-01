import axios from 'axios';

class TodoService {
    baseUrl = "http://localhost:8080/tasks/";
    getAll(){
        return axios.get(`${this.baseUrl}listar`).then(res => {
            // console.log(res);
            return res.data;
        })
    }

    post(todo){
        return axios.post(`${this.baseUrl}insertar`, todo).then(res => {
            return res.data;
        })
    }

    update(todo){
        return axios.put(`${this.baseUrl}actualizar`, todo).then(res => {
            return res.data;
        })
    }
}

export default new TodoService();
