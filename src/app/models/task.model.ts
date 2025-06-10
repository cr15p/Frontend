export interface Task {
  parentSku: string | null;
  sku: string;
  name: string;
  description: string;
  price: number;
  properties: any;
  available: boolean; 	
}
