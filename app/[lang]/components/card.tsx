import { faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "app/[lang]/components/chip";
import { DictionaryJSONType } from "app/[lang]/page";

export default async function Card({ dictionary }: { dictionary: DictionaryJSONType }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-md offset-y-4 blur-6 spread-2">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?cs=srgb&dl=pexels-alex-azabache-3879071.jpg&fm=jpg')",
        }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="flex justify-between items-center w-full">
            <p className="text-sm text-gray-600 flex items-center">
              <FontAwesomeIcon className="h-4 w-4 mr-2" size="lg" icon={faCircleCheck} />
              {dictionary.card.available}
            </p>
            <div className="flex items-center leading-none">
              <div>
                <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-yellow-500 mr-1" />
              </div>
              <div className="text-gray-800 font-bold">{4.9}</div>&nbsp;
              <div className="text-gray-800">/</div>&nbsp;
              <div className="text-gray-800 font-bold">5</div>&nbsp;
              <div className="text-gray-600 text-sm">(100)</div>
            </div>
          </div>
          <div className="border-t border-gray-300 w-full my-3" />
          <div className="my-2">
            <Chip>{dictionary.card.guided_tour}</Chip>
          </div>
          <div className="text-gray-900 font-bold text-xl mb-2">{dictionary.card.title}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
            praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}
