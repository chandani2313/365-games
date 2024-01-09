import axios from 'axios';

export const AwsService = {
    uploadImage: (file, path) => {
        const headers = {
          "Content-Type": "multipart/form-data",
        };  
        return axios.create({ headers }).post("/image/upload/" + path, file);
    }
}