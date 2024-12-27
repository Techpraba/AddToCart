import "./Card.css";

function Card({ addCount, d, cakePics, cakeName, cakePrice }) {
    const handleClick = () => {
        d({ id: cakeName, name: cakeName, price: cakePrice });
        addCount();
    };

    return (
        <div className="card">
            <img src={cakePics} alt={cakeName} />

            <div className="cakeDetails">
                <h2>{cakeName}</h2>
                <h3>Price: ₹{cakePrice}</h3>
                <button onClick={handleClick}>Add to Cart</button>
            </div>

        </div>
    );
}

export default Card;
