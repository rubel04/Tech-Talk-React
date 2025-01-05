import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);
  const handleBookmark = (blog) => {
    setBookmarks([...bookmarks, blog])
  }
  const handleMarkAsRead = (id, time) =>{
    setMarkAsRead(markAsRead + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className="max-w-7xl mx-auto ">
      <Header></Header>
      <div className="flex gap-4">
      <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead} ></Bookmarks>
      </div>
    </div>
  )
}

export default App