export interface SoundpageKey {
  id: string;
}

export interface Soundpage extends SoundpageKey {
  name: string;
  originalAudioUrl?: string;
}
