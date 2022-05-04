import { BasePrice } from "./base-price";
import { SpecialPriceDecorator } from "./decorators/special-price-decorator";
import { VipCustomerDecorator } from "./decorators/vip-customer.decorator";
import { Customer } from "./models/customer";
import { ProductService } from "./services/product-service";

const customer: Customer = {
  name: "Joan",
  isFirstBuy: true,
  type: "NON-VIP",
};

const product = new ProductService("Guitara Suhr Classic", 2500);

let discount = new BasePrice();

if (customer.isFirstBuy) {
  discount = new SpecialPriceDecorator(discount);
}

if (customer.type === "VIP") {
  discount = new VipCustomerDecorator(discount);
}

product.setSpecialPrice(discount.calculate(product.getPrice()));

console.log(product);
