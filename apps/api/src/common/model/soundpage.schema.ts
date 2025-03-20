import { Schema } from 'dynamoose';
import { v1 as uuid } from 'uuid';

export const SoundpageSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid(),
  },
  name: {
    type: String,
  },
  originalAudioUrl: {
    type: String,
  },
});
