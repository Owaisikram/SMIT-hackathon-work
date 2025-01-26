import React from "react";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h3 className="card-title">Wedding Loans</h3>
        <p className="card-description">
          * Maximum loan: PKR 5 Lakh <br /> *Loan period: 3 years
        </p>

        <label htmlFor="cars">Learn More</label>

        <select>
          <option value="Valima">Valima</option>
          <option value="Furniture">Furniture</option>
          <option value="Valima Food">Valima Food</option>
          <option value="Jahez">Jahez</option>
        </select>
      </div>
      <div className="card">
        <h3 className="card-title">Home Construction Loans</h3>
        <p className="card-description">
          *Maximum loan: PKR 10 Lakh <br /> *Loan period: 5 years
        </p>
        <label htmlFor="Learn More">Learn More</label>

        <select>
          <option value="Valima">Structure</option>
          <option value="Furniture">Finishing</option>
          <option value="Valima Food">Loan</option>
        </select>
      </div>
      <div className="card">
        <h3 className="card-title">Business Startup Loans</h3>
        <p className="card-description">
          *Maximum loan: PKR 10 Lakh <br /> *Loan period: 5 years
        </p>
        <label htmlFor="cars">Learn More</label>

        <select>
          <option value="Valima">Buy Stall</option>
          <option value="Furniture">Advance Rent htmlFor Shop</option>
          <option value="Valima Food">Valima Food</option>
          <option value="Jahez">Shop Machinery</option>
        </select>
      </div>
      <div className="card">
        <h3 className="card-title">Education Loans</h3>
        <p className="card-description">
        *Maximum loan: Based on requirement <br /> *Loan period: 4 years

        </p>
        <label htmlFor="cars">Learn More</label>

        <select name="random" id="random">
          <option value="volvo">University Fees</option>
          <option value="saab">Child Fees Loan</option>
        </select>
      </div>
    </div>
  );
};

export default Cards;
