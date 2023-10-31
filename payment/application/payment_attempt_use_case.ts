import { PaymentRepository } from "../domain/payment-repository";

export class PaymentAttemptUseCase {
  constructor(private paymentRepo: PaymentRepository) {}
  
  async getSuccess(): Promise<boolean> {
    const response = await this.paymentRepo.getToken();
    if(response){
      return true;
    }
    return false;
  }
}
