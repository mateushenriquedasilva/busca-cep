import React from 'react';

import { Container } from './Styles';

function Card(props) {
  return(
      <Container>
          <h2>CEP: <span>{props.erro ? ("40028922") : (props.cep)}</span></h2>
          <h3>Logradouro: <span>{props.erro ? ("Bom Dia & Companhia") : (props.logradouro)}</span></h3>
          <h3>Bairro: <span>{props.erro ? ("SBT") : (props.bairro)}</span></h3>
          <h3>Uf: <span>{props.erro ? ("TV") : (props.uf)}</span></h3>
          <h3>Ibge: <span>{props.erro ? ("😕") : (props.ibge)}</span></h3>
          <h3>DDD: <span>{props.erro ? ("0800") : (props.ddd)}</span></h3>
      </Container>
  );
}

export default Card;

// 50030310