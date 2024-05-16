export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value !== 0){
      this.balance = this.balance + value;
      console.log('Voce depositou')
    }else {
      console.log('O valor deve ser maior que 0')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value <= this.balance){
      this.balance = this.balance - value;
      console.log('Você sacou')
    }else{
      console.log('Saque Negado, Você não tem esse valor na sua conta')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
