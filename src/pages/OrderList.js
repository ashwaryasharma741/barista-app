import Card from "../components/Card";

let products = require('../data/prices.json');
let orders = require('../data/orders.json');
let payments = require('../data/payments.json');

const OrderList = () => {
  
  const constructUserOrder = (orders) => {
    const orderMap = {};

    orders.forEach((order) => {
      if (orderMap[order.drink] === undefined) {
        orderMap[order.drink] = 1;
      } else {
        orderMap[order.drink] += 1;
      }
    });

    return (
      <div>
        {
          Object.keys(orderMap).map((drink) => {
            return <div className="flex justify-between" key={drink}>
                <span className="capitalize">{drink}</span>
                <span className="capitalize">{orderMap[drink]}</span>
              </div>
          })
        }
      </div>
    );
  };

  const newMap = {}, newUserOrderMap = {};
  const getOrderInfo = () => {
    orders.forEach(({user, drink, size}) => {
      if (newMap[user] === undefined) {
        newMap[user] = {total: 0, paid: 0, owed: 0};
      }

      const filteredPayments = payments.filter((i) => i.user === user);
      let paidAmt = 0;
      filteredPayments.forEach((p) => paidAmt += p.amount);
      newMap[user]['paid'] = paidAmt;

      const requiredDrink = products.find((product) => product.drink_name === drink);
      if (requiredDrink) {
        newMap[user]['total'] += parseInt(requiredDrink.prices[size]);
      }

      newMap[user]['owed'] = newMap[user]['total'] - newMap[user]['paid'];

      if (newUserOrderMap[user] === undefined) {
        newUserOrderMap[user] = [{ drink: drink, size: size }];
      } else {
        newUserOrderMap[user].push({ drink: drink, size: size });
      }
    })
    return newMap;
  }

  const orderInfo = getOrderInfo();
  return (
    <div className="p-8">
      <div>
        {
          Object.keys(orderInfo).map((user) => {

            const footer = <>
              <div className="font-bold">Invoice Details </div>
              { Object.keys(orderInfo[user]).map((amountType) => {
                return <div className="flex justify-between" key={amountType}>
                  <span className="capitalize">{amountType} Amount</span>
                  <span className="capitalize">{orderInfo[user][amountType]}</span>
                </div>

              })}
            </>;

            return (
              <div key={user}>
                <Card heading={user} footer={footer}>
                  <div className="font-bold">Order Details </div>
                  { constructUserOrder(Object.values(newUserOrderMap[user])) }
                </Card>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default OrderList;