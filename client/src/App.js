import logo from './logo.svg';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SetCreator} from '../src/pages/SetCreator';
import {SetViewer} from '../src/pages/SetViewer';
import {SetSelector} from '../src/pages/SetSelector';
import {FormCreateSet} from '../src/components/forms/form create set/FormCreateSet.js'
import {FormCreateCard} from '../src/components/forms/form create card/FormCreateCard.js'

import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<SetSelector/>}/>
        <Route path="*" element={<SetSelector/>}/>
        <Route path="/set/:id" element={<SetViewer/>}/>
        <Route path="/admin" element={<SetCreator/>}>
          <Route path="createset" element={<FormCreateSet/>}/>
          <Route path="createcard" element={<FormCreateCard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
