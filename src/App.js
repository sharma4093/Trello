import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/Login'  // Adjust the path as needed
import Layout from './components/Layout'  // Adjust the path as needed
import Todo from './features/Todo/Todo'  // Adjust the path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Layout><Todo /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App


{/* <div>
<Login/>
  {/* <Layout>
    <Todo/>
  </Layout> 
</div> */}