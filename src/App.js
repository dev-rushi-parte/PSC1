
import { useState } from 'react';
import './App.css';
import Filters from './component/Filters';
import Navbar from './component/Navbar';
import Offers from './component/Offers';
import Restaurants from './component/Restaurants';
import offers from './data/offers.json';
import restaurants from './data/Restaurent.json';
const filter = [
  "Cost High to Lost",
  "Cost Lost to High",
  "Ratings",
  "Delivery Time",
  "Relevance"

]

function App() {
  const [filterBy, seFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "Cost High to Lost":
        {
          seFilterBy("Cost High to Lost");
          data.sort((a, b) => b.costForTwo - a.costForTwo);
          setData([...data]);
          break;
        }
      case "Cost Lost to High": {
        seFilterBy("Cost Lost to High");
        data.sort((a, b) => a.costForTwo - b.costForTwo);
        setData([...data]);
        break;
      }
      case "Ratings": {
        seFilterBy("Ratings");
        data.sort((a, b) => a.rating - b.rating)
        setData([...data]);
        break;
      }
      case "Delivery Time": {
        seFilterBy("Delivery Time");
        data.sort((a, b) => a.deliveryTimings - b.deliveryTimings);
        setData([...data]);
        break;
      }
      case "Relevance": {
        seFilterBy("Relevance");
        data.sort((a, b) => a.id - b.id);
        setData([...data])
        break;
      }
      default: {
        setData(data);
        break;
      }
    }
  }

  return (
    <div>
      <Navbar />
      <Offers offers={offers} />
      <section className="near-you">
        <Filters
          filters={filter}
          currentFilterBy={filterBy}
          updateFilter={updateFilter}
        />
        <Restaurants restaurants={data} />
      </section>
    </div>
  );
}

export default App;
