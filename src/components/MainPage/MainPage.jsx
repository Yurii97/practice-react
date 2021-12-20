import MainHeader from '../MainHeader';
import MainPanel from '../MainPanel/MainPanel';
import options from '../../data/mainPaneloptions.json';
import StatisticsBtns from '../StatisticsBtns/StatisticsBtns';

function MainPage() {
  return (
    <>
      <MainHeader />
      <MainPanel title={'витрати'} options={options.costPanelOptions} />
      <MainPanel title={'доходи'} options={options.incomesPanelOptions} />
      <MainPanel title={'баланс'} options={options.balancePanelOptions} />
      <StatisticsBtns />
    </>
  );
}

export default MainPage;
