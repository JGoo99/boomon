export interface SoundpageKey {
  pk: string;
  sk: string;
}

export interface Soundpage extends SoundpageKey {
  soundpageName?: string;
  originalS3AudioUrl?: string;
  // bookmark
  bookmarkContent?: string;
  bookmarkTime?: number;
}
