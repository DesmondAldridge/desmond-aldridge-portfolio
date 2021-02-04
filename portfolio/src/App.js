import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import DuckyCLI from './assets/desktop-with-ducky.png';
import DailyPlanner from './assets/daily-planner.png';
import ReadmeGenerator from './assets/readme-generator.png';
import Trendr from './assets/trendr-dash.png';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app_itemsContainer'>
        <Item
          title='Rubber Ducky CLI'
          desc="CLI to perform the popular practice of 'rubber duck debugging' within the terminal, replacing the need for a physical rubber ducky by one's computer."
          descLink=''
          backgroundImg={DuckyCLI}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/DesmondAldridge/rubber-ducky-cli'
          rightBtnTxt='DEMO'
          rightBtnLink='https://raw.githubusercontent.com/DesmondAldridge/rubber-ducky-cli/main/img/title-card.png'
          twoButtons='true'
          first
        />
        <Item
          title='Daily Planner'
          desc='Scheduling app designed for a standard work day. It allows you to write and save entries for 8 available time slots (9 a.m. - 5 p.m.). The current hour is always highlighted and distinct from both upcoming and previous entries.'
          descLink=''
          backgroundImg={DailyPlanner}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/DesmondAldridge/work-day-scheduler'
          rightBtnTxt='DEMO'
          rightBtnLink='https://desmondaldridge.github.io/work-day-scheduler/'
          twoButtons='true'
        />
        <Item
          title='Readme Generator'
          desc='CLI that generates a README file based on user input.'
          descLink=''
          backgroundImg={ReadmeGenerator}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/DesmondAldridge/readme-generator'
          rightBtnTxt='DEMO'
          rightBtnLink='https://drive.google.com/file/d/1QuzsCEA-r8YG5HxdSLXLc8NUn9di7rtY/view'
          twoButtons='true'
        />
        <Item
          title='Trendr'
          desc="Trending topics aggregator, full-stack application. I was the lead and primary contributor for the app's backend."
          descLink=''
          backgroundImg={Trendr}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/paulmorales7/Trendr'
          rightBtnTxt='DEMO'
          rightBtnLink='https://trendr-react.herokuapp.com/'
          twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
