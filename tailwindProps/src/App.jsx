import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'> Vite with Tailwind</h1>
     <Card username = "Poonam" post='Staff Engineer'/>
     
     <Card username='Json' post='QA Engineer.'/>
     <Card />
    </>
  )
}

export default App
