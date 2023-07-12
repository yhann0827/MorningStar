import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";
import Header from "app/[lang]/components/header";
import Card from "app/[lang]/components/card";
import json from "dictionaries/en.json";
import { Container } from "app/[lang]/components/container";
import Image from "next/image";

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
        <div className="my-14 text-center text-gray-600 ">
          <div className="grid gap-y-2 mb-10 text-2xl">
            <h2 dangerouslySetInnerHTML={{ __html: dictionary.homepage.miss_chance }}></h2>
            <h2>{dictionary.homepage.conquered}</h2>
            <div className="my-2">
              <button className="border border-blue-500  hover:border-blue-600 hover:text-blue-600 active:border-blue-500 text-blue-500 active:text-blue-500 font-bold py-2 px-20 rounded transition-all hover:shadow-md hover:blur-6 hover:spread-2 active:shadow-none">
                Book
              </button>
            </div>
          </div>
          <div className="text-xl">
            <div className="mb-5">
              Why visit Eiffel Tower is a must for now
              <br />
              If you plan to get there An incredible view from the summit......
            </div>
            <div>
              If the ticket to the summit is sold out, getting up to the second floor is already magic...
              <br />
              We will make your journey unforgettable by incredible and hidden theories about Eiffel Tower...
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center pb-2">Why choose Us?</h2>
            <h3 className="text-md text-gray-600 text-center pb-3">Lorem ipsum dolor sit amet consectetur</h3>
          </div>
          <div>
            <img alt="tower" src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <img
              alt="museum"
              src="https://images.pexels.com/photos/14705350/pexels-photo-14705350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
