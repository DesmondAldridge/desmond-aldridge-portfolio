import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Opening from './components/Opening';

import bg1 from './assets/images/bg1.jpg';
import bg2 from './assets/images/bg2.jpg';
import bg3 from './assets/images/bg3.jpg';
import bg4 from './assets/images/bg4.jpg';

import duckyCLI from './assets/images/ducky-cli.png';

// import DuckyCLI from './assets/desktop-with-ducky.png';
// import DailyPlanner from './assets/daily-planner.png';
// import ReadmeGenerator from './assets/readme-generator.png';
// import Trendr from './assets/trendr-dash.png';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app_itemsContainer'>
      <Opening
          backgroundImg={bg4}
          
        />
        <Item
          title='Rubber Ducky CLI'
          img={duckyCLI}
          desc="CLI to perform the popular practice of 'rubber duck debugging' within the terminal, replacing the need for a physical rubber ducky by one's computer."
          descLink=''
          backgroundImg={bg1}
          leftBtnTxt='GITHUB'
          leftBtnLink='https://github.com/DesmondAldridge/rubber-ducky-cli'
          rightBtnTxt='README'
          rightBtnLink='https://github.com/DesmondAldridge/rubber-ducky-cli/blob/main/README.md#rubber-ducky-cli---'
        />
        <Item
          title='Daily Planner'
          desc='Scheduling app designed for a standard work day. It allows you to write and save entries for 8 available time slots (9 a.m. - 5 p.m.). The current hour is always highlighted and distinct from both upcoming and previous entries.'
          descLink=''
          backgroundImg={bg2}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/DesmondAldridge/work-day-scheduler'
          rightBtnTxt='DEMO'
          rightBtnLink='https://desmondaldridge.github.io/work-day-scheduler/'
        />
        <Item
          title='Readme Generator'
          desc='CLI that generates a README file based on user input.'
          descLink=''
          backgroundImg={bg3}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/DesmondAldridge/readme-generator'
          rightBtnTxt='DEMO'
          rightBtnLink='https://drive.google.com/file/d/1QuzsCEA-r8YG5HxdSLXLc8NUn9di7rtY/view'
        />
        <Item
          title='Trendr'
          desc="Trending topics aggregator, full-stack application. I was the lead and primary contributor for the app's backend."
          descLink=''
          backgroundImg={bg4}
          leftBtnTxt='CODE'
          leftBtnLink='https://github.com/paulmorales7/Trendr'
          rightBtnTxt='DEMO'
          rightBtnLink='https://trendr-react.herokuapp.com/'
        />
      </div>
    </div>
  );
}

export default App;