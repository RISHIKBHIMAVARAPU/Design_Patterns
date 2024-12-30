import { ICar } from "./ICar.js";

export interface ICarFactory{
  getCar(carName : string) :ICar;
}