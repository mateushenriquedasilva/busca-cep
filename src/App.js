import api from './services/api';
import React, { useEffect, useState } from 'react';


function App() {

  const [cep, setCep] = useState('');
  const [validateAlert, setValidateAlert] = useState('');

  const [callApi, setCallApi] = useState(true);

  function validate(e) {
    if(e.length === 8){
      setValidateAlert('CEP Válido!');
      setCep(e);
    }else{
      setValidateAlert('CEP Inválido');
    }
  }
  
  useEffect(() => {
    api.get(`${cep}/json/`)
      .then(resp => setCep(resp.data))
      .catch(err => console.log(err))
  },[callApi]);
  

  return (
    <div>
      <form>
          <input type="number" placeholder="Ex.: 0000000" onChange={(e) => validate(e.target.value)}/>
      </form>

      <div>
        <p>{validateAlert}</p>

        <button onClick={() => {
          callApi ? setCallApi(false) : setCallApi(true)
        }}>Buscar</button>
      </div>
      
      <div>
        <h2>CEP: {cep.cep}</h2>
        <p>Logradouro: {cep.logradouro}</p>
        <p>Bairro: {cep.bairro}</p>
        <p>UF: {cep.uf}</p>
      </div>
    </div>
  );
}

export default App;
