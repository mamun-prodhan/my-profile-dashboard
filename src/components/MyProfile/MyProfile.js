import React, { useState } from "react";
import editImage from "../../assets/Vector.png";

const MyProfile = () => {
  const contactDetails = {
    contact: "01875258984",
    name: "Kirk Smith",
    introduction: "About you",
    email: "Kirk@gmail.com",
    username: "Kirk",
    photoGalary: "",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestias",
    qualification:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere fugiat iusto et, excepturi quam, voluptatum molestiae labore dolor quod corrupti quibusdam officia molestias expedita culpa quas delectus, sequi accusantium",
  };

  const [hideInput, setHideInput] = useState(false);

  const handleEdit = () => {
    setHideInput(true);
    console.log("handle edit clicked");
  };

  return (
    <div>
      <div className="my-3">
        <h3 className="text-xl font-semibold">Contact Details</h3>
        {!hideInput && (
          <div className="flex items-center justify-between">
            <p>{contactDetails.contact}</p>
            <button onClick={handleEdit} className="border-2 rounded-full p-2">
              <img src={editImage} alt="" />
            </button>
          </div>
        )}
        {hideInput && (
          <div>
            <input
              type="text"
              name="contact"
              value={contactDetails.contact}
              autoComplete="off"
              className="pr-2 pl-3 mt-3 py-2 w-1/2 font-normal text-[#28534E] rounded-xl border-none ring-2 ring-[#E5EBE4] focus:outline-[#3F8825] focus:ring-2"
            />
            <div className="mt-3">
              <button className="py-2 px-4 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                Save
              </button>
              <button className="py-2 px-3 my-1 mr-3 rounded-xl text-[#3F8825] bg-[#E6EBE3] hover:text-[#FFFFFF] hover:bg-[#3F8825] focus:bg-[#3F8825]  focus:text-[#FFFFFF]">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <div></div>
      <div>
        <h3 className="text-xl font-semibold">Name</h3>
        <p>{contactDetails.name}</p>
      </div>
    </div>
  );
};

export default MyProfile;
