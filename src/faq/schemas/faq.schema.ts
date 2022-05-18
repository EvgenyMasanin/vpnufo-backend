import mongoose, { Document, Schema } from 'mongoose'

const FAQSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
})

export interface FAQ {
  title: string
  content: string
}

export interface FAQDocument extends FAQ, Document<string> {}

export default mongoose.model<FAQDocument>('FAQ', FAQSchema)
