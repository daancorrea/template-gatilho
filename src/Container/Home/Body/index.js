import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Body,
  FirstRow,
  FirstRowItemsOne,
  FirstRowItemsTwo,
  H1,
  P,
  Button,
  SecondRow,
  SecondRowItems,
  SecondRowInsideItems,
  ThirdRow,
  ThirdRowItems,
  ThirdRowInsideItems,
  FourthRow,
  FourthRowItems,
  FourthRowInsideItems,
  BndesItem,
  BndesInsideItem,
  Footer,
  FooterFirstRow,
  FooterSecondRow,
  FooterTitle,
  FooterSocialMedia,
} from "./styles";

import GroupImage from "../../../assets/group.svg";
import EnergyImage from "../../../assets/energy-img.svg";
import ElectricImage from "../../../assets/electric-img.svg";
import CostBenefitImage from "../../../assets/cost-benefit-img.svg";
import LowMaintenanceImage from "../../../assets/low-maintenance-img.svg";
import PowerGenerationImage from "../../../assets/power-generation-img.svg";
import EconomyImage from "../../../assets/economy-img.svg";
import PropertyValautionImage from "../../../assets/property-valuation-img.svg";
import LogoBndes from "../../../assets/logo-bndes.svg";
import LogoBv from "../../../assets/logo-bv.svg";
import LogoFacebook from "../../../assets/logo-facebook.svg";
import LogoInstagram from "../../../assets/logo-instagram.svg";
import LogoLinkedin from "../../../assets/logo-linkedin.svg";
import LogoLosango from "../../../assets/logo-losango.svg";
import LogoNexen from "../../../assets/logo-nexen.svg";
import LogoSicoob from "../../../assets/logo-sicoob.svg";
import LogoSolFacil from "../../../assets/logo-sol-facil.svg";

const BodyHome = () => {
  const navigate = useNavigate()
  return (
    <Body>
      <FirstRow>
        <FirstRowItemsOne>
          <H1>
            Economia e <br />
            compromisso com <br />o campo.
          </H1>
          <P>
            A Nexen é um movimento que tem como objetivo levar <br /> energia
            limpa, renovável e sustentável para um número <br /> cada vez maior
            de pessoas. Queremos que você conquiste <br /> sua autonomia e, para
            isso, trabalhamos com soluções em <br />
            energia fotovoltaica.
          </P>
          <br />
          <P future={true}>
            O futuro está próximo e nós olhamos para ele,
            <br /> aproximando-o do presente.
          </P>
        </FirstRowItemsOne>
        <FirstRowItemsTwo>
          <div>
            <div>
              <input type="text" name="name" id="" placeholder="Nome" />
            </div>
            <div>
              <input type="email" name="email" id="" placeholder="E-mail" />
            </div>
            <div>
              <input
                type="number"
                name="whatsapp"
                id=""
                placeholder="Whats App"
              />
            </div>
            <div>
              <input type="text" name="city" id="" placeholder="Cidade" />
            </div>
            <div>
              <input type="text" name="state" id="" placeholder="Estado" />
            </div>
            <div>
              <input
                type="number"
                name="consumption"
                id=""
                placeholder="Consumo médio mensal em R$"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <textarea rows="5" name="message" placeholder="Menssagem" />
            </div>
          </div>
          <Button onClick={()=> navigate('/success')}>Quero um orçamento</Button>
        </FirstRowItemsTwo>
      </FirstRow>
      <SecondRow>
        <H1>
          Valorize sua propriedade <br /> rural com energia solar.
        </H1>
        <P>
          O sistema solar fotovoltaico é composto por painéis solares, inversor
          solar, sistema de fixação dos <br /> painéis, cabeamentos e
          conectores, podendo ser instalado em qualquer lugar.
        </P>
        <img src={GroupImage} alt="group-img" />
        <SecondRowItems>
          <SecondRowInsideItems>
            <h1>1</h1>
            <p>
              Os raios solares são absorvidos nas células <br /> fotovoltaicas e
              transformados em energia <br /> elétrica de corrente contínua.
            </p>
          </SecondRowInsideItems>
          <SecondRowInsideItems>
            <h1>2</h1>
            <p>
              Em seguida, a energia elétrica em corrente <br /> contínua é
              transformada em corrente alternada <br /> (compatível com a rede
              elétrica) pelo inversor.
            </p>
          </SecondRowInsideItems>
          <SecondRowInsideItems>
            <h1>3</h1>
            <p>
              Os equipamentos elétricos da residência podem <br /> usufruir de
              energia fotovoltaica, altamente <br /> sustentável.
            </p>
          </SecondRowInsideItems>
          <SecondRowInsideItems>
            <h1>4</h1>
            <p>
              A energia excedente gerada é injetada na rede <br /> da
              concessionária, gerando créditos que <br /> podem ser utilizados
              nas próximas faturas.
            </p>
          </SecondRowInsideItems>
        </SecondRowItems>
      </SecondRow>
      <ThirdRow>
        <H1 isThirdRow={true}>
          Sustentabilidade para <br /> toda a sua propriedade.
        </H1>
        <ThirdRowItems>
          <ThirdRowInsideItems>
            <img src={EnergyImage} alt="enerny-img" />
            <P isThirdRow={true}>
              Energia sustentável: não produz <br /> resíduos ou poluentes para
              o meio <br />
              ambiente.
            </P>
          </ThirdRowInsideItems>
          <ThirdRowInsideItems>
            <img src={ElectricImage} alt="electric-img" />
            <P isThirdRow={true}>
              Viabilidade territorial: a eletricidade <br /> pode ser gerada em{" "}
              <br />
              qualquer lugar em que haja incidência solar.
            </P>
          </ThirdRowInsideItems>
          <ThirdRowInsideItems>
            <img src={CostBenefitImage} alt="cost-benefit-img" />
            <P isThirdRow={true}>
              Boa relação custo-benefício: a <br /> estrutura proporciona alta
              potência <br />
              para uso residencial.
            </P>
          </ThirdRowInsideItems>
          <ThirdRowInsideItems>
            <img src={LowMaintenanceImage} alt="low-maintenance-img" />
            <P isThirdRow={true}>
              Baixa manutenção: duração média <br /> estimada de 30 anos e
              retorno do <br />
              investimento entre 3 e 7 anos.
            </P>
          </ThirdRowInsideItems>
          <ThirdRowInsideItems>
            <img src={PowerGenerationImage} alt="power-generation-img" />
            <P isThirdRow={true}>
              Geração de créditos de energia: a eletricidade <br /> excedente é
              transformada em créditos, que <br /> podem ser usados durante a
              noite ou em <br /> períodos de baixa incidência solar.
            </P>
          </ThirdRowInsideItems>
          <ThirdRowInsideItems>
            <img src={EconomyImage} alt="economy-img" />
            <P isThirdRow={true}>
              Economia: propriedades rurais que <br /> utilizam sistemas de
              energia solar <br /> economizam até 95% na conta de luz.
            </P>
          </ThirdRowInsideItems>
          <ThirdRowInsideItems>
            <img src={PropertyValautionImage} alt="property-valuation-img" />
            <P isThirdRow={true}>
              Valorização da propriedade rural: a instalação de painéis <br />{" "}
              solares fotovoltaicos valoriza a propriedade rural em até <br />{" "}
              8%, em média.
            </P>
          </ThirdRowInsideItems>
        </ThirdRowItems>
      </ThirdRow>
      <FourthRow>
        <H1 style={{ marginBottom: "35px" }}>
          Invista, economize e faça <br />
          sua propriedade crescer.
        </H1>
        <FourthRowItems>
          <FourthRowInsideItems>
            <div>
              <img src={LogoBv} alt="logo-bv" />
            </div>
            <P>
              Taxa a partir de <strong>1,40% ao mês</strong> Parcelamento em{" "}
              <strong>até 72x</strong> Carência de
              <strong> 30 dias</strong>
            </P>
          </FourthRowInsideItems>
          <FourthRowInsideItems>
            <div>
              <img src={LogoSicoob} alt="logo-sicoob" />
            </div>
            <div>
              <P>
                Taxa a partir de <strong> 0,5% ao mês</strong> + CDI do dia
                Parcelamento em <strong>até 96x</strong> Carência de
                <strong> 30 dias</strong>
              </P>
              <P small={true}>
                Vá até a agência mais próxima com comprovante de endereço e
                efetue uma simulação.
              </P>
            </div>
          </FourthRowInsideItems>
          <FourthRowInsideItems>
            <div>
              <img src={LogoLosango} alt="logo-losango" />
            </div>
            <P>
              Taxa a partir de <strong> 1,40% ao mês</strong> Parcelamento em{" "}
              <strong> até 60x </strong>Carência de
              <strong> 90 dias</strong>
            </P>
          </FourthRowInsideItems>
          <FourthRowInsideItems>
            <div>
              <img src={LogoSolFacil} alt="logo-sol-facil" />
            </div>
            <div>
              <P>
                Taxa a partir de <strong> 1,32% ao mês </strong> Parcelamento em{" "}
                <strong>até 120x</strong> Carência de <strong>6 meses</strong>
              </P>
              <P small={true}>Sujeito à análise de crédito</P>
            </div>
          </FourthRowInsideItems>
          <FourthRowInsideItems bndes={true}>
            <img src={LogoBndes} alt="logo-sol-facil" />
            <BndesItem>
              <BndesInsideItem>
                <div style={{ marginBottom: "30px" }}>
                  <P>
                    <strong>Prazo</strong>
                  </P>
                  <P>
                    Financiamento direto até 192 meses Financiamento indireto
                    até 120 meses
                  </P>
                </div>
                <div>
                  <P>
                    <strong>Carência</strong>
                  </P>
                  <P>
                    Financiamento direto até 36 meses Financiamento indireto até
                    24 meses
                  </P>
                </div>
              </BndesInsideItem>
              <BndesInsideItem>
                <div style={{ marginBottom: "30px" }}>
                  <P>
                    <strong>Apoio indireto</strong>
                  </P>
                  <P>
                    Taxa: TFB, TLP ou Selic + 0,95% a.a., mais taxa de juros
                    intermediário financeiro.
                  </P>
                </div>
                <div>
                  <P>
                    <strong>Apoio direto</strong>
                  </P>
                  <P>
                    Taxa: TLP, Selic ou Cesta + 0,9% a.a., mais taxa de risco de
                    crédito.
                  </P>
                </div>
              </BndesInsideItem>
            </BndesItem>
          </FourthRowInsideItems>
        </FourthRowItems>
      </FourthRow>
      <Footer>
        <FooterFirstRow>
          <img src={LogoNexen} alt="logo-nexen" />
          <div style={{ gap: "5px" }}>
            <FooterTitle>SAC:</FooterTitle>
            <p>0800 941 3301</p>
            <p>sac@nexen.com.br</p>
          </div>
          <div>
            <FooterTitle>Televendas:</FooterTitle>
            <p>0800 941 3301</p>
            <p>contato@nexen.com.br</p>
          </div>
          <div>
            <FooterTitle>Redes Sociais:</FooterTitle>
            <FooterSocialMedia>
              <img src={LogoFacebook} alt="logo-facebook" />
              <img src={LogoLinkedin} alt="logo-linkedin" />
              <img src={LogoInstagram} alt="logo-instagram" />
            </FooterSocialMedia>
          </div>
        </FooterFirstRow>
        <FooterSecondRow>
          <p>Política de Privacidade</p>
          <p>Desenvolvido por Gatilho</p>
        </FooterSecondRow>
      </Footer>
    </Body>
  );
};

export default BodyHome;
