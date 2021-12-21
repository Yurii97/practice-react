import MainHeader from '../MainHeader';
import MainPanel from '../MainPanel/MainPanel';
import options from '../../data/mainPaneloptions.json';
import StatisticsBtns from '../StatisticsBtns/StatisticsBtns';

function MainPage() {
  return (
    <>
      <MainHeader />
      <MainPanel title={'витрати'} options={options.costPanelOptions} bgColor="orange" />
      <MainPanel title={'доходи'} options={options.incomesPanelOptions} bgColor="green" />
      <MainPanel title={'баланс'} options={options.balancePanelOptions} bgColor="purple" />
      <StatisticsBtns />
    </>
  );
}

export default MainPage;
