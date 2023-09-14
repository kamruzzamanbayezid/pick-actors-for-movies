import './App.css'
import Header from './Components/Header/Header'
import Actors from './Components/Actors/Actors'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [selectedActor, setSelectedActor] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remainingCost, setRemainingCost] = useState(0);

  // Click handler to show actors && More
  const handleSelect = (actor) => {
    let cost = actor.salary;
    // apply find method so that we can't pick duplicate actor
    const isExist = selectedActor.find(actors => actors.id === actor.id);
    if (isExist) {
      return alert('Already Selected');
    }
    else {
      // sum total cost of actors
      selectedActor.forEach(actor => {
        cost = cost + actor.salary;
      })

      // remaining Cost
      const remaining = 20000 - cost;

      if (cost > 20000) {
        return alert('Your budget is over')
      }
      else {
        
        // set remaining cost
        setRemainingCost(remaining)
        // set total Cost when the cost is under 20000
        setTotalCost(cost);

        const newCart = [...selectedActor, actor];
        setSelectedActor(newCart);
      }

    }

  }

  return (
    <div className='card-container'>
      <Header></Header>
      <div className='flex gap-6'>
        <Actors handleSelect={handleSelect}></Actors>
        <Cart
          selectedActor={selectedActor}
          totalCost={totalCost}
          remainingCost={remainingCost}
        ></Cart>
      </div>
    </div>
  )
}

export default App
