export type UserRole = 'broker' | 'motorCarrier' | 'driver' | null;

export interface InsuranceProduct {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  email: string;
  topic: string;
  message: string;
} 