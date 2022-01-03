import './index.css';
import { useState, useEffect} from 'react';
import Card from './comps/Card';
import Pop  from './comps/Pop';
import Title from './comps/Title';
import Input from './comps/Input';

function App() {
  const [pics, setPics] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=9ezJGjjhspNVL2IZu9fES68_Bw_2M0DRe1xeVmJ31l4")
    .then(response => response.json())
    .catch(err => console.error(err))
    .then(data => setPics(data));
  }, [])
console.log(pics)

  return (
    <div className="App">
      <Title />
      <Input />
      <Card pics={pics} setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <Pop selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
