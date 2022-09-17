import { Document, model, Model, Schema } from 'mongoose'

import { Tag as TagModel } from '../../../fe/shared/models/tag'

export const tagSchema = new Schema({
  name: String,
  count: { type: Number, default: 1 }
})

export const Tag: Model<TagModel> = model<TagModel>('Tag', tagSchema)
