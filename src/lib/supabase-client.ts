import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with the database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example helper function to fetch insurance products from Supabase
export async function getInsuranceProducts() {
  try {
    const { data, error } = await supabase
      .from('insurance_products')
      .select('*');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching insurance products:', error);
    return [];
  }
}

// Example helper function to save contact form submissions
export async function saveContactFormSubmission(formData: {
  email: string;
  topic: string;
  message: string;
}) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error saving contact form submission:', error);
    return { success: false, error };
  }
} 