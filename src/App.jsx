import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

    const [data, setData] = useState()

   const fetchData = () => 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))


    useEffect(() => {
      fetchData()
    },
     [])
    

  return (
    <div className="App">
      {data && data.map( restaurant => 
      <>
        <h1 key={restaurant.id}>{restaurant.data}</h1>
        <h3 key={restaurant.id}>getSmiley()</h3>
        </>
        )}
    </div>
  )
}

export default App
