import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

const [bookmark, setbookmark] = useState([]);
const [time , settime] = useState(0);


const addspendtime = (id,timer) =>{
  const newtime = (time + timer);
  settime(newtime);
  const remingbookmark = bookmark.filter(bookmark => bookmark.id !== id);
  setbookmark(remingbookmark);
}


const addtobookmark = blog =>{

  const newbookmark = [...bookmark, blog];
  setbookmark(newbookmark);
}

  return (
    <>
    <Header></Header>
    <main className='md:flex p-4 mx-20'>
      <Blogs addtobookmark={addtobookmark} addspendtime={addspendtime}></Blogs>
      <Bookmarks bookmark={bookmark} time={time}></Bookmarks>
    </main>

    </>
  )
}

export default App
