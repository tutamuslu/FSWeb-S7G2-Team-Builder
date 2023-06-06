import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyForm from './components/Form'
import Listele from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [uyeler, setUyeler] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id)
  }

  return (
    <div className="App">
      <MyForm editId={editId} uyeler={uyeler} setUyeler={setUyeler} />
      <Listele uyeler={uyeler} handleEdit={handleEdit} />
    </div>
  )
}

export default App;
