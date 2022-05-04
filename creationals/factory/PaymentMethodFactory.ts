import PaymentType from "./enums/payment-type";
import IPaymentMethod from "./interfaces/IPayment";
import PayPal from "./types/PayPal";
import Visa from "./types/Visa";

export default class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethod {
    if (type === PaymentType.Visa) {
      return new Visa();
    }

    if (type === PaymentType.PayPal) {
      return new PayPal();
    }

    throw new Error("Invalid payment method type.");
  }
}
