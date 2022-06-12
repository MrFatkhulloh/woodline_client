import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [orders, setOrders] = useState()

  useEffect(() =>{
    fetch('http://localhost:9000/allorders', {method: 'GET'})
			.then((response) => response.json())
			.then((data) => setOrders(data))
			.catch((err) => console.log(err))
  },[])

  return (
    <>
      <table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Job Title</th>
      <th>Twitter</th>
    </tr>
  </thead>
  <tbody>
    {
      orders && orders?.length && orders.map((o, i) => (
        <tr  key={o[0]}>
          <td data-column="First Name">{o[1]}</td>
          <td data-column="Last Name">{o[2]}</td>
          <td data-column="Job Title">{o[3]}</td>
          <td data-column="Twitter">{o[4].split(' ').join(' or ')}</td>
        </tr>
      ))
    }    
  </tbody>
</table>
    </>
  )
}

export default App
