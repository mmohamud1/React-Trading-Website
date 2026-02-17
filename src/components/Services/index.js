import React from 'react';
import Icon1 from '../../images/svg4.svg';
import Icon2 from '../../images/svg5.svg';
import Icon3 from '../../images/svg6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, omnis.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, voluptates?
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>premium benifits</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            delectus?
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
