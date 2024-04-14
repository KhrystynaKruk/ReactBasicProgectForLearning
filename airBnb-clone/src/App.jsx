

import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Card from './components/Card'
import data from './data'


function App() {
 const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    }) 

  return (
  <>
  <Navbar/>
  <Content/>
  <section className="cards-list">
                {cards}
            </section>
  </>
  

  )
}

export default App
