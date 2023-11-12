export interface WordType {
    word: string | null;
    type: Type | null;
    correct?: boolean | null;
  }
  
  export enum Type {
    NOUN, VERB
  }