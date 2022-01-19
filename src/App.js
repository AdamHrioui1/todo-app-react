import { useState, useEffect } from 'react'
import './App.css';
import Item from './Item';
import Span from './Span';

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [spanContent, setSpanContent] = useState('wooooooooooow')
  const [showSpan, setShowSpan] = useState(false)
  const [success, setSuccess] = useState(true)
  const [updatedItem, setUpdatedItem] = useState(null)

  const add = (e) => {
    e.preventDefault()
    if(text && !updatedItem) {
      let newItem = {
        id: new Date().getTime().toString(),
        value: text
      }
      setList([...list, newItem])
      setSuccess(true)
      setSpanContent('Item added successfuly')
      setShowSpan(true)
      setText('')
    }
    else if(text && updatedItem) {
      list.map(item => {
        if(item.id === updatedItem) {
          item.value = text
        }
      })
      setList(list)
      console.log(list);
      setSuccess(true)
      setSpanContent('Item updated successfuly')
      setUpdatedItem(null)
      setText('')
      setShowSpan(true)

    }
    else {
      setSuccess(false)
      setSpanContent('Please write something!!')
      setShowSpan(true)
    }
    
  }
  const remove = (id) => {
    setList(list.filter(item => item.id !== id))
    setSuccess(false)
    setSpanContent('Item removed successfuly!!')
    setShowSpan(true)
  }
  const update = (id) => {
    setUpdatedItem(id)
    let myItem = list.find(item => item.id === id)
    setText(myItem.value)
  }

  return (
    <div className="App">
      <h1>Hello Bro</h1>
      <div className="container">
        
        <Span add={add} showSpan={showSpan} setShowSpan={setShowSpan} success={success} spanContent={spanContent} />

        <form onSubmit={add}>
          <input type="text" placeholder='Remind, sleep, somthing else...' value={text} onChange={e => setText(e.target.value)} />
          <button className="btn" style={{'margin': 0}}>+</button>
        </form>

        <article className="list">
          <ul>
            {
              list.map(item => {
                return (
                  <Item key={item.id} item={item} remove={remove} update={update} />
                )
              })
            }
          </ul>
        </article>
      </div>
    </div>
  );
}

export default App;
