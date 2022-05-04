import IPaymentMethod from "../interfaces/IPayment";

export default class Visa implements IPaymentMethod {
  get comission(): number {
    return 0.05;
  }
}
