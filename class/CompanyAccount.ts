import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.getValidateStatus() && value > 0) {
      this.deposit(value)
      console.log('Voce pegou um empréstimo')
    }
  }
}
