import './index.css'
import { FreeDownload } from './components/Section'

import { Layout } from './components/Layout'
import { About } from './components/About'
import { TermsCon } from './components/TermCon'
import { Privacy } from './components/Privacy'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Layout>
      <Routes>
             <Route path='/' element={ <FreeDownload />}/>
             <Route path='/about'   element={ <About />}/>
             <Route path='/termscon'  element={ <TermsCon />}/>
             <Route path='privacy'  element={<Privacy />}/>
        
      </Routes>
     </Layout>
    </>
  )
}

export default App
