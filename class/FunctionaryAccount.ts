import { DioAccount } from "./DioAccount";

export class FunctionaryAccount extends DioAccount{

  constructor(name: string, accoutNumber: number){
    super(name, accoutNumber)
  }

  depositWithBonus = (value: number): void => {
    let depositWBonus = value + 10
    this.deposit(depositWBonus)
  }
}