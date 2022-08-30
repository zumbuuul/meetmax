import { NextPage } from "next";
import Image from "next/image";

interface ContactI {
  contactName: string;
}

const Contact: NextPage<ContactI> = ({ contactName }) => {
  return (
    <>
      <div className="flex py-2 items-center">
        <div className="w-6/12">
          <Image
            src="/profileimage.png"
            alt=""
            width="32px"
            height="32px"
            className="rounded-full"
          ></Image>
        </div>
        <div>
          <span className="w-max inline-block text-[1rem] text-grey-1100 font-medium">
            {contactName}
          </span>
          {/* mislim da bi trebalo sve sto ima veze sa FriendListom da se preimenuje u ContactList/Contacts
          jer planiram da ubacim opciju da mozes da se dopisujes sa firmama, i pravnim licima koji nisu ljudi/prijatelji */}
        </div>
        <div className="w-full flex justify-end">
          <span className="text-sm  text-grey-700">Activity</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
