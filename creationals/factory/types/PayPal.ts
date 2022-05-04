import IPaymentMethod from "../interfaces/IPayment";

export default class PayPal implements IPaymentMethod {
  get comission(): number {
    return 0.06;
  }
}
