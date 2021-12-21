import { SectionPanels, ButtonStyled } from './MainPanel.styled';
import { ContainerStyled } from '../_styled/container.styled';

function MainPanel({ title, options, bgColor }) {
  return (
    <SectionPanels>
      <ContainerStyled>
        <div>
          <div className="containerHeader">
            <h2>{title}</h2>
            <p>UAH</p>
          </div>
          <ul>
            {options.map(({ period, sum }) => (
              <li key={period}>
                <span>{period}</span>
                <span>{sum}</span>
              </li>
            ))}
          </ul>
        </div>
        <ButtonStyled type="button" bgColor={bgColor}>
          +
        </ButtonStyled>
      </ContainerStyled>
    </SectionPanels>
  );
}

export default MainPanel;
