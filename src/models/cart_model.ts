import type { Product_model } from "@/models/product_model";

export interface Cart_model {
  productId: number,
  product: Product_model
  count: number
}
