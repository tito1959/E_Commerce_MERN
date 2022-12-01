import { model, Schema } from "mongoose";
import { orderList } from "../types/types.model";

const orderListSchema = new Schema<orderList>({
total: {type: Number, }
},
{
  versionKey: false,
  timestamps: false
})

export default model('orderList', orderListSchema)