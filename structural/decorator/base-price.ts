import { IDiscount } from "./interfaces/IDiscount";

export class BasePrice implements IDiscount {
  calculate(input: number): number {
    console.log(`${this.constructor.name} discount applied.`);
    return input;
  }
}
