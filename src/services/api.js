import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export async function getTemplate() {
    const response = await axios.get(`${url}/templates`);
    return response.data;
}

export async function createTemplate(payload) {
    const response = await axios.post(`${url}/templates`, payload);
    return response.data;
}

export async function deleteTemplate(id) {
    const response = await axios.delete(`${url}/templates/${id}`);
    return response.data;
}