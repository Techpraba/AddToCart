import { useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import "./App.css";
import pic1 from "./assets/cake1.jpg";
import pic2 from "./assets/cake2.jpg";
import pic3 from "./assets/cake3.jpg";
import pic4 from "./assets/cake4.jpg";
import pic5 from "./assets/cake5.jpg";
import pic6 from "./assets/cake6.jpg";
import pic7 from "./assets/cake7.jpg";
import pic8 from "./assets/cake8.jpg";
import pic9 from "./assets/cake9.jpg";

function App() {
  const [count, setCount] = useState(0);
  const [navbar, setNavbar] = useState(true);
  const [metaData, setMetaData] = useState([]);
  const [search, setSearch] = useState('');

  const data = [
    { id: 1, name: "Hot Pink Cake", price: 500, img: pic1 },
    { id: 2, name: "Tower Cake", price: 1500, img: pic2 },
    { id: 3, name: "Black Forest", price: 800, img: pic3 },
    { id: 4, name: "Violet Cake", price: 400, img: pic4 },
    { id: 5, name: "Red Velvet", price: 600, img: pic5 },
    { id: 6, name: "Dark Choco", price: 700, img: pic6 },
    { id: 7, name: "Brown Cake", price: 800, img: pic7 },
    { id: 8, name: "Mango Cake", price: 300, img: pic8 },
    { id: 9, name: "Brown Forest", price: 1000, img: pic9 },
    { id: 9, name: "Brown Forest", price: 1000, img: pic9 },
    { id: 9, name: "Brown Forest", price: 1000, img: pic9 },
    { id: 9, name: "Brown Forest", price: 1000, img: pic9 },


  ];

  const toggleNavbar = () => setNavbar(!navbar);

  const incrementCartCount = () => setCount(count + 1);

  const handleCakeData = (cake) => {
    const existingCake = metaData.find((item) => item.id === cake.id);

    if (existingCake) {
      setMetaData(
        metaData.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setMetaData([...metaData, { ...cake, quantity: 1 }]);
    }
  };

  const totalPrice = metaData.reduce((total, item) => total + (item.price * item.quantity), 0);
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar display={count} bill={toggleNavbar} setSearch={setSearch} />
      <div className="cardOverall">
        {filteredData.map((item) => (
          <Card

            addCount={incrementCartCount}
            d={handleCakeData}
            cakePics={item.img}
            cakeName={item.name}
            cakePrice={item.price}
          />
        ))}
        <div className={navbar ? "hide" : "show"}>
          <h1 className="b">Billing Details...!</h1>
          <div className="billdata">
            <table>
              <thead>
                <tr>
                  <th className="cakename">Cake Name</th>
                  <th>Quantity</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {metaData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="total">Total Price: ₹{totalPrice}</h2>
            <button onClick={toggleNavbar}>hide</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;