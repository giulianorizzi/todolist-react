import axios from 'axios';

class FolderService{
    baseUrl = "http://localhost:8080/folders/";
    getAll(){
        return axios.get(`${this.baseUrl}listar`).then(res => {
            return res.data;
        })
    }

    getByID(id){
        return axios.get(`${this.baseUrl}listar/${id}`).then(res => {
            return res.data;
        })
    }

    post(folder){
        return axios.post(`${this.baseUrl}insertar`, folder).then(res => {
            return res.data;
        })
    }

    update(folder){
        return axios.put(`${this.baseUrl}actualizar`, folder).then(res => {
            return res.data;
        })
    }

    delete(id){
        return axios.delete(`${this.baseUrl}eliminar/${id}`).then(res => {
            return res.data;
        })
    }
}

export default new FolderService();