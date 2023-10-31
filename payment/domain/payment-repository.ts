export interface PaymentRepository {
  getToken(): Promise<boolean | null>;
}
