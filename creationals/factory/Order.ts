import PaymentType from "./enums/payment-type";
import IPaymentMethod from "./interfaces/IPayment";
import PaymentMethodFactory from "./PaymentMethodFactory";

export default class Order {
  private paymentType: IPaymentMethod;
  private commission: number = 0;

  constructor(private type: PaymentType, private amount: number) {}

  public create(): void {
    // set payment type
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

    // calculate commission
    this.commission = this.paymentType.comission * this.amount;

    console.log(this.commission);
    // ...
  }
}
