export class ProductService {
  private specialPrice: number = 0;
  private discount: number = 0;

  constructor(private name: string, private price: number) {}

  public setSpecialPrice(input: number) {
    if (this.price > input) {
      this.specialPrice = input;
      this.discount = 1 - this.specialPrice / this.price;
    }
  }

  public getPrice(): number {
    return this.price;
  }

  public getDiscount(): number {
    return this.discount;
  }
}
