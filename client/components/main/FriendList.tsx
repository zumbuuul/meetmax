import { NextPage } from "next";
import Contact from "./friendlist/Contact";
import { ReactNode, useState } from "react";

const FriendList: NextPage = () => {
  const contacts = ["lorem", "ipsum", "dolor", "sit"];
  //mock json jer nemamo api lol

  let [searchValue, setSearchValue] = useState<string>("");

  const displayFriendsWithFilter = (array: string[]): ReactNode => {
    let a = array.filter((contact: string) => contact.includes(searchValue));

    if (a.length === 0) {
      return (
        <p className="text-center text-grey-1100 "> No contacts to show </p>
      );
    } else
      return a.map((contact, idx) => (
        <Contact contactName={contact} key={idx}></Contact>
      ));
  };

  return (
    <div className="overflow-scroll h-[100vh] w-full hidden laptop:flex laptop:flex-col px-5 gap-y-5 sticky top-[5rem] right-0">
      <div className="relative">
        <div className="absolute top-[35%] left-[1vw]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6266 11.5128L16 14.8855L14.8855 16L11.5128 12.6266C10.2579 13.6325 8.69706 14.1797 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1797 8.69706 13.6325 10.2579 12.6266 11.5128ZM11.0466 10.9284C12.0462 9.90047 12.6044 8.52254 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021C8.52254 12.6044 9.90047 12.0462 10.9284 11.0466L11.0466 10.9284V10.9284Z"
              fill="white"
            />
            <path
              d="M12.6266 11.5128L16 14.8855L14.8855 16L11.5128 12.6266C10.2579 13.6325 8.69706 14.1797 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1797 8.69706 13.6325 10.2579 12.6266 11.5128ZM11.0466 10.9284C12.0462 9.90047 12.6044 8.52254 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021C8.52254 12.6044 9.90047 12.0462 10.9284 11.0466L11.0466 10.9284V10.9284Z"
              fill="#4E5D78"
            />
          </svg>
        </div>

        <input
          type="text"
          className="w-full py-2 rounded-lg pl-[2vw] border-grey-600 border-2"
          placeholder="Search friends!"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        {searchValue ? (
          <div
            className="absolute right-[1vw] top-[35%] hover:cursor-pointer"
            onClick={() => {
              setSearchValue("");
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4V14.4ZM8 6.8688L10.2624 4.6056L11.3944 5.7376L9.1312 8L11.3944 10.2624L10.2624 11.3944L8 9.1312L5.7376 11.3944L4.6056 10.2624L6.8688 8L4.6056 5.7376L5.7376 4.6056L8 6.8688Z"
                fill="white"
              />
              <path
                d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4V14.4ZM8 6.8688L10.2624 4.6056L11.3944 5.7376L9.1312 8L11.3944 10.2624L10.2624 11.3944L8 9.1312L5.7376 11.3944L4.6056 10.2624L6.8688 8L4.6056 5.7376L5.7376 4.6056L8 6.8688Z"
                fill="#4E5D78"
              />
            </svg>
          </div>
        ) : null}
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
        {displayFriendsWithFilter(contacts)}
        {/*treba da se napravi sistem za activity*/}
      </div>
    </div>
  );
};

export default FriendList;
