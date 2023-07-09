import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";
import Header from "app/[lang]/components/header";
import Card from "app/[lang]/components/card";
import json from "dictionaries/en.json";

type FlattenJSON<T> = T extends object ? { [K in keyof T]: FlattenJSON<T[K]> } : string;

export type DictionaryJSONType = FlattenJSON<typeof json>;

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center pb-1" dangerouslySetInnerHTML={{ __html: dictionary.homepage.main_title }}></h1>
        <h2 className="text-center text-lg text-gray-600">{dictionary.homepage.main_subtitle}</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Card dictionary={dictionary} />
          <Card dictionary={dictionary} />
          <Card dictionary={dictionary} />
          <Card dictionary={dictionary} />
        </div>
      </div>
    </div>
  );
}
