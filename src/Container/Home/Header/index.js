import React from "react";

import {
  Header,
  TitleHeader,
  ParagraphHeader,
  Button,
  HeaderItems,
} from "./styles";

const HeaderHome = () => {
  return (
    <Header>
      <HeaderItems>
        <TitleHeader>Do sol para o campo</TitleHeader>
        <ParagraphHeader>
          Não é só a sua plantação que se beneficia com o sol, mas seu lucro
          também. Deixe o sol pagar sua conta. Economize até 95% na sua conta de
          luz com energia solar. Chega de custos desnecessários, invista na sua
          propriedade.
        </ParagraphHeader>
        <Button>Quero um orçamento</Button>
      </HeaderItems>
    </Header>
  );
};

export default HeaderHome;
