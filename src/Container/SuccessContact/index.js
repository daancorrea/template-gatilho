import React from "react";

import FacebookLogoWhite from "../../assets/facebook-logo-white.svg";
import LinkedinLogoWhite from "../../assets/linkedin-logo-white.svg";
import InstagramLogoWhite from "../../assets/instagram-logo-white.svg";
import NexenLogoWhite from "../../assets/nexen-logo-white.svg";

import { Container, Title, P, SocialMedia } from "./styles";

const SuccessContact = () => {
  return (
    <Container>
      <Title>
        Do Sol para <br /> o campo
      </Title>
      <P>
        Agradecemos pelo seu cadastro para saber mais sobre <br />
        autonomia, lucratividade, economia e sustentabilidade com a <br />
        utilização de energia solar fotovoltaica na sua propriedade rural.
        <br /> Em breve um de nossos consultores entrará em contato para <br />
        atender suas necessidades e esclarecer dúvidas.
      </P>
      <P pStrong={true}>
        Deixe o sol pagar sua conta, chega de custos <br /> desnecessários,
        invista na sua propriedade.
      </P>
      <P pStrong={true}>
        Para mais informações sobre tendências, informações e <br /> tecnologia
        no segmento de energia solar, acompanhe nossas redes sociais.
      </P>
      <SocialMedia>
        <div style={{marginRight:"15px"}}>
          <img src={FacebookLogoWhite} alt="facebook-logo-white" />
        </div>
        <div style={{marginRight:"15px"}}>
          <img src={LinkedinLogoWhite} alt="linkedin-logo-white" />
        </div>
        <div>
          <img src={InstagramLogoWhite} alt="instagram-logo-white" />
        </div>
      </SocialMedia>
      <div>
        <img src={NexenLogoWhite} alt="nexen-logo-white" />
      </div>
    </Container>
  );
};

export default SuccessContact;
