import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import categoriesData from "../Data";
const itemsPerPage = 6;

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const categories = categoriesData.categories;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
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

  useEffect(() => {
    localStorage.setItem(
      "selectedInterests",
      JSON.stringify(selectedInterests)
    );
  }, [selectedInterests]);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-2 flex items-center justify-center flex-col mt-6 p-8 w-[35%] rounded-2xl">
        <div className="font-[600] text-2xl">Please mark your interests!</div>
        <span className="text-sm mt-2">We will keep you notified.</span>
        <form className="flex flex-col mt-10 w-[90%]">
          <p className="text-sm font-[600] mb-2">My Saved Interests!</p>
          <div className="flex flex-col">
            {categories
              .slice(
                currentPage * itemsPerPage,
                currentPage * itemsPerPage + itemsPerPage
              )
              .map((category, index) => (
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
              ))}
          </div>
        </form>
        {categories.length > itemsPerPage && (
          <div className="flex w-[90%] mt-6 p-2">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(categories.length / itemsPerPage)}
              previousLabel="<<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              activeClassName="bg-gray-300 w-8 rounded-lg text-center"
              className="flex gap-2 text-sm"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Interests;
