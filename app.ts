import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { FunctionaryAccount } from './class/FunctionaryAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
  peopleAccount.deposit(20)
  peopleAccount.withdraw(10)
  console.log(peopleAccount)
  
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
  companyAccount.deposit(10)
  companyAccount.withdraw(10)
  companyAccount.getLoan(500)
  console.log(companyAccount)

  const functionaryAccout: FunctionaryAccount = new FunctionaryAccount('leo', 5)
  functionaryAccout.depositWithBonus(100)
  functionaryAccout.withdraw(50)
  console.log(functionaryAccout)