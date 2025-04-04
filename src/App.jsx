import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  // http://localhost:5173/
  return (
    <>
    <Header></Header>
    <main className='md:flex p-4 mx-20'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </main>

    </>
  )
}

export default App
