import { en } from "@/data/translations/en";
import { hi } from "@/data/translations/hi";

export const languages = ["en", "hi"] as const;
export type Language = (typeof languages)[number];
type DeepWiden<T> = T extends readonly (infer Item)[]
  ? readonly DeepWiden<Item>[]
  : T extends object
    ? { [Key in keyof T]: DeepWiden<T[Key]> }
    : T extends string
      ? string
      : T;
export type Translation = DeepWiden<typeof en>;

export const translations: Record<Language, Translation> = { en, hi };
export const defaultLanguage: Language = "en";
