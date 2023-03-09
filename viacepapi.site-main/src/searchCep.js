import axios from "axios";

async function searchCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default searchCep;
