import React, { useState } from "react";
import searchCep from "./searchCep";

function CepSearch() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCep(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCep(cep);
    if (data) {
      setCepData(data);
      setError(null);
    } else {
      setError("CEP não encontrado");
      setCepData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          CEP:
          <input type="text" value={cep} onChange={handleInputChange} />
        </label>
        <button type="submit">Buscar</button>
      </form>
      {cepData && (
        <div>
          <p>CEP encontrado:</p>
          <p>{cepData.logradouro}</p>
          <p>{cepData.bairro}</p>
          <p>{cepData.localidade} - {cepData.uf}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default CepSearch;
