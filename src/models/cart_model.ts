import type { Product_model } from "@/models/product_model";

export interface Cart_model {
  product: Product_model
  count: number
}
