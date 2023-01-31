import Card from "../components/Card";

let products = require('../data/prices.json');

const PriceList = () => {
  return (
    <div className="p-8">
      <div >
        {
          products.map((product) => {
            return (
              <Card key={product.drink_name} heading={product.drink_name}>
                <div>{Object.keys(product.prices).map((variety) => {
                  return (
                    <div className="flex justify-between" key={variety}>
                      <span className="capitalize">{variety}</span>
                      <span>{product.prices[variety]}</span>
                    </div>)
                })}</div>
              </Card>
            )
          })
        }
      </div>
    </div>
  );
}

export default PriceList;

