import axios from "axios";
const url =  'https://bbd79f93a96c.ngrok-free.app ';

export async function getTemplate() {
    const response = await axios.get(`${url}/templates`);
    return response.data;
}

export async function getTemplateById(templateId) {
  const response = await axios.get(`${url}/templates/${templateId}`);
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