import React from 'react'
import './App.scss'
import Navbar from './layouts/navbar/Navbar'
import Home from './pages/home/Home'
import Preliminaries from './pages/prelims/Preliminaries'
import Accomplishments from './pages/accomplishments/Accomplishments'
import Contacts from './pages/contacts/Contacts'
import Personal from './pages/prelims/Personal'
import Company from './pages/prelims/Company'
import COR from './pages/prelims/personal/COR'
import CV from './pages/prelims/personal/CV'
import Waiver from './pages/prelims/personal/Waiver'
import Workplan from './pages/prelims/personal/Workplan'
import MOA from './pages/prelims/personal/MOA'
import Jurat from './pages/prelims/personal/Jurat'
import MDR from './pages/prelims/personal/MDR'
import SchoolID from './pages/prelims/personal/SchoolID'
import PhilhealthID from './pages/prelims/personal/PhilhealthID'
import Vaxcard from './pages/prelims/personal/Vaxcard'
import Resume from './pages/prelims/company/Resume'
import Application from './pages/prelims/company/Application'
import Companyletter from './pages/prelims/company/Companyletter'
import Week1 from './pages/accomplishments/weeks/Week1'
import Week2 from './pages/accomplishments/weeks/Week2'
import Week3 from './pages/accomplishments/weeks/Week3'
import Week4 from './pages/accomplishments/weeks/Week4'
import Week5 from './pages/accomplishments/weeks/Week5'
import Fire from './pages/accomplishments/certs/Fire'
import Emergency from './pages/accomplishments/certs/Emergency'
import Completion from './pages/accomplishments/certs/Completion'
import DTR from './pages/accomplishments/dtr/DTR'
import Rating from './pages/accomplishments/rating/Rating'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='main'>
        <Router>
          <Navbar />
          <Routes className="contents">
            <Route path='/' element={<Home/>}></Route>
            <Route path='prelims' element={<Preliminaries/>}>
              <Route path='personal' element={<Personal/>}>
                <Route path='CV' element={<CV/>}></Route>
                <Route path='COR' element={<COR/>}></Route>
                <Route path='waiver' element={<Waiver/>}></Route>
                <Route path='workplan' element={<Workplan/>}></Route>
                <Route path='MOA' element={<MOA/>}></Route>
                <Route path='jurat' element={<Jurat/>}></Route>
                <Route path='MDR' element={<MDR/>}></Route>
                <Route path='SchoolID' element={<SchoolID/>}></Route>
                <Route path='PhilhealthID' element={<PhilhealthID/>}></Route>
                <Route path='Vaxcard' element={<Vaxcard/>}></Route>
              </Route>
              <Route path='company' element={<Company/>}>
                <Route path='Resume' element={<Resume/>}></Route>
                <Route path='Application' element={<Application/>}></Route>
                <Route path='Companyletter' element={<Companyletter/>}></Route>
              </Route>
            </Route>
            <Route exact path='accomplishments' element={<Accomplishments/>}>
              <Route path='week1' element={<Week1/>}></Route>
              <Route path='week2' element={<Week2/>}></Route>
              <Route path='week3' element={<Week3/>}></Route>
              <Route path='week4' element={<Week4/>}></Route>
              <Route path='week5' element={<Week5/>}></Route>
              <Route path='fire' element={<Fire/>}></Route>
              <Route path='emergency' element={<Emergency/>}></Route>
              <Route path='completion' element={<Completion/>}></Route>
              <Route path='DTR' element={<DTR/>}></Route>
              <Route path='rating' element={<Rating/>}></Route>
            </Route>
            <Route path='contacts' element={<Contacts/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App