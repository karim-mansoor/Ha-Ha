export interface Device {
  _id?: string; // Add ? to make it optional
  name: string;
  price: number;
  description: string;
  images: string;
  company: {
    _id?: string; // Optional
    name: string;
    description?: string;
  };
  category: {
    _id?: string; // Optional
    name: string;
  } | any; // Allow 'any' or string temporarily to stop the error
}