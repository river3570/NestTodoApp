import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello NestJS!";
  }

  getFood(food: string): string {
    return `${food}!`;
  }
}
