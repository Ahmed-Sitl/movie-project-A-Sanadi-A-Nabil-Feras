import React from "react";
import FlipCard from "./FlipCard";
const imgBaseUrl = "https://image.tmdb.org/t/p/w500";


// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

// Component to display the list of movies and tv shows in a category page
const CategoryPage = ({ pageTitle, shows, categoryId }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-[#032541] dark:text-white">
      {/* Category Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        {pageTitle === "tv" ? "TV Shows" : "Movies"} in{" "}
        {capitalizeFirstLetter(categoryId.replace(/-/g, " "))} Category
      </h1>

      <div className="grid grid-cols-12 gap-4">
        {/* Filter Options Section */}
        <div className="col-span-12 lg:col-span-3 ">
          <div className="filter-options">
            <p className="text-center">Filter Options (Coming Soon)</p>
          </div>
        </div>

        {/* Show Grid Section */}
        <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows?.length > 0 ? (
          shows.map((show) => (
            <FlipCard
              key={show.id}
              item={show}
              mediaType={pageTitle}
              imgBaseUrl={imgBaseUrl}
              backStyle="alternate"
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No shows found
          </p>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
