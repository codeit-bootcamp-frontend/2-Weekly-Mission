import Header from './Header.js'
import Search from './Search.js'
import Cards from './Cards.js'
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Search />
        <Cards />
      </main>
      
    </>
  )
}

export default App;
