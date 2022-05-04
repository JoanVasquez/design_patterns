export default class SingletonPattern {
  private static singletonPattern: SingletonPattern;

  private constructor() {}

  public static getClassInstance(): SingletonPattern {
    if (!this.singletonPattern) {
      this.singletonPattern = new SingletonPattern();
    }

    return this.singletonPattern;
  }
}
