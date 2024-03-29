import React, { useState } from "react";
import categoriesData from "../Data";

const Interests = () => {
  const [page, setPage] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const categories = categoriesData.categories;

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= categories.length / 6 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests([...selectedInterests, value]);
    } else {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== value)
      );
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-2 flex items-center justify-center flex-col mt-6 p-8 w-[35%] rounded-2xl">
        <div className="font-[600] text-2xl">Please mark your interests!</div>
        <span className="text-sm mt-2">We will keep you notified.</span>
        <form onSubmit="" className="flex flex-col mt-10 w-[90%]">
          <p className="text-sm font-[600] mb-2">My Saved Interests!</p>
          <div className="flex flex-col">
            {categories.slice(page * 6 - 6, page * 6).map((category, index) => {
              return (
                <label
                  key={category.id}
                  className="font-[400] text-[16px] py-2 flex gap-4 items-center justify-start"
                >
                  <input
                    type="checkbox"
                    value={category.name}
                    className="custom-checkbox"
                    checked={selectedInterests.includes(category.name)}
                    onChange={handleCheckboxChange}
                  />
                  {category.name}
                </label>
              );
            })}
          </div>
          {categories.length > 0 && (
            <div className="mt-12">
              <span onClick={() => selectPageHandler(page - 1)}>←</span>
              {[...Array(categories.length / 6)].map((_, i) => {
                return (
                  <span
                    key={i}
                    className="cursor-pointer"
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              })}

              <span onClick={() => selectPageHandler(page + 1)}>→</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Interests;
