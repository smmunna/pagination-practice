import './App.css'
import MyProducts from './MyProducts'

function App() {

  return (
    <div>
      <h3 style={{textAlign:'center',fontSize:'28px'}}>My all Datas</h3>
      <hr />

      <div className='my-card'>
        <MyProducts/>
        <MyProducts/>
        <MyProducts/>
        <MyProducts/>
      </div>
    </div>
  )
}

export default App
