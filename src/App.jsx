import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

const [bookmark, setbookmark] = useState([]);


const addtobookmark = blog =>{

  const newbookmark = [...bookmark, blog];
  setbookmark(newbookmark);
}

  return (
    <>
    <Header></Header>
    <main className='md:flex p-4 mx-20'>
      <Blogs addtobookmark={addtobookmark}></Blogs>
      <Bookmarks bookmark={bookmark}></Bookmarks>
    </main>

    </>
  )
}

export default App
