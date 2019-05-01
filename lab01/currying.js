//without validation
//const applyCoupon = (item) => (coupon) => item.price * (100 - coupon) / 100;

//with validation
//const applyCoupon = (item) => (coupon) => (parseFloat(item.price) || 0) * (100 - (parseFloat(coupon) || 0)) / 100;

//with validation
const applyCoupon = (item) => {
    const price = parseFloat(item.price) || 0;
    return (discount) => {
        const coupon = parseFloat(discount) || 0;
        return price * (100 - coupon) / 100;
    }
};

const item = {
    name: "Avocado",
    type: "Fruit",
    category: "Food",
    price: 200
};

console.log(applyCoupon(item)(10));
