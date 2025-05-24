import './index.css'
import { Header } from "./components/Header"
import { FreeDownload } from './components/Section'
import { Articles } from './components/Article'
import { Layout } from './components/Layout'

function App() {
  

  return (
    <>
      <Layout>
        <FreeDownload />
        <Articles />
      </Layout>
    </>
  )
}

export default App
