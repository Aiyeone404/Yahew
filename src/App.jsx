import { useState } from 'react'
useState
import Nav from './assets/components/nav'
import Inicio from './assets/components/inicio'
import Catalogo from './assets/components/catalogo'
import Footer from './assets/components/footer'
import Video from './assets/components/video'
import PalavraDoDia from './assets/components/versiculos'
function App() {
  return (
    <div>
      <Nav/>
      <Inicio/>
      <PalavraDoDia/>
      <Catalogo/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default App
