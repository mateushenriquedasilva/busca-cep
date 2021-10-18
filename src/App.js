import React, { useEffect, useState } from 'react';
import api from './services/api';
import Card from './components/Card/Card';
import GlobalStyles from './styles/global'

function App() {

  const [cep, setCep] = useState('');
  const [validateAlert, setValidateAlert] = useState('');

  const [callApi, setCallApi] = useState(true);

  function validate(e) {
    if(e.length === 8){
      setValidateAlert('');
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
    <main>

      <div className="inputs">
        <input type="number" max={1} placeholder="Ex.: 0000000" onChange={(e) => validate(e.target.value)}/>


        <button onClick={() => {
          callApi ? setCallApi(false) : setCallApi(true)
        }}>Buscar</button>
      </div>

      <p>{validateAlert}</p>


      <Card cep={cep.cep} logradouro={cep.logradouro} bairro={cep.bairro} uf={cep.uf} ibge={cep.ibge} ddd={cep.ddd} erro={cep.erro}/>
      <GlobalStyles />
    </main>
  );
}

export default App;
