import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";
import Header from "app/[lang]/components/header";
import Card from "app/[lang]/components/card";
import json from "dictionaries/en.json";
import { Container } from "app/[lang]/components/container";

type FlattenJSON<T> = T extends object ? { [K in keyof T]: FlattenJSON<T[K]> } : string;

export type DictionaryJSONType = FlattenJSON<typeof json>;

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-4xl font-bold text-gray-900 text-center pb-3" dangerouslySetInnerHTML={{ __html: dictionary.homepage.main_title }}></h1>
        <h2 className="text-center text-lg text-gray-600">{dictionary.homepage.main_subtitle}</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-10 lg:mx-10">
          <Card dictionary={dictionary} />
          <Card dictionary={dictionary} />
          <Card dictionary={dictionary} />
          <Card dictionary={dictionary} />
        </div>
      </Container>
    </div>
  );
}
