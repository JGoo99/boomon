import { Schema } from 'dynamoose';

export const SoundpageSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      rangeKey: true,
    },
    soundpageName: {
      type: String,
    },
    originalS3AudioUrl: {
      type: String,
    },
    bookmarkContent: {
      type: String,
    },
    bookmarkTime: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);
