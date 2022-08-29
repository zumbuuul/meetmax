import { NextPage } from "next";
import Contact from "./friendlist/Contact";

const FriendList: NextPage = () => {
  return (
    <div className="overflow-scroll h-[100vh] w-full hidden laptop:flex laptop:flex-col px-5 gap-y-5 sticky top-[5rem] right-0">
      <div>
        <input
          type="text"
          className="w-full py-2 rounded-lg pl-[2vw] border-grey-600 border-2"
          placeholder="Search friends!"
        ></input>
        {/*mislim da se za ovakve forme gde imas samo jedno polje (npr za pretragu, ili kad trazis prijatelja)
         mng vise isplati da se koristi obican input umesto formik. samo mu das state i onsubmit i tjt.
         posto se ova logika za submitovanje i cuvanje jednog forma stalno ponavlja, mozes da napravis
         custom hook useSearchInput ili neko drugo ime.
  */}
      </div>
      <div className="flex"></div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-grey-1000">Friends</h1>
        <p>...</p>
      </div>
      <div>
        {/*treba da se napravi sistem za activity*/}
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default FriendList;
