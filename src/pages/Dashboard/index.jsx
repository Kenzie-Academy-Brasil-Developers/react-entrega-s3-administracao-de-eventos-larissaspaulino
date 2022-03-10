import { useEffect, useState } from 'react'

import Card from '../../components/Card'
import api from '../../services/api'

const Dashboard = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    api
      .get('/beers')
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {beers.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </>
  )
}
export default Dashboard
