export class Bike {

  private order: number;

  constructor(private id: number, private name: string, private description: string, private photo: string, private count: number, private price: number){
    this.id = id;
    this.name = name;
    this.description = description;
    this.photo = photo;
    this.count = count;
    this.order = 0;
  }

  public addOrder(): void{
      this.order ++;
      this.count --;
  }

  public removeOrder(): void{
      this.order --;
      this.count ++;
  }
}
