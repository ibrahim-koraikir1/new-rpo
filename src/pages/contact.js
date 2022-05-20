import {useState , useEffect} from 'react'

export default function Contact() {

  const [countries, setCountries] = useState([])
  const [mode, setMode] = useState(true)

  useEffect( () => {
    data()
}, [])
 const   data  = async  () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    await setCountries(data)
  }

 console.log(countries)
  return (
    <div>contact</div>
  )
}
