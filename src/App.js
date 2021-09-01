import { Router } from '@reach/router';
import Darkmode from 'darkmode-js';

import './App.css';

import Heading from './components/heading/heading';
import Landing from './pages/landing/landing';
import WorkExperience from './pages/workExperience';

const options = {
  bottom: '64px', // default: '32px'
  // right: 'unset', // default: '32px'
  // left: '32px', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

function App() {
  return (
    <div className='App'>
      <Heading />
      <div className='content'>
        <Router>
          <Landing path='/' />
          <WorkExperience path='/experience' />
        </Router>
      </div>
    </div>
  );
}

export default App;
