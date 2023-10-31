interface PaymentAttempt {
  token: string;
  productId: number;
  cost: number;
}

enum PaymentStatus {
  Pending = "Pending",
  Success = "Success",
  Failed = "Failed",
}

export { PaymentAttempt, PaymentStatus };
