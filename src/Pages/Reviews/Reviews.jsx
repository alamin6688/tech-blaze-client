const Reviews = () => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto p-8 shadow-sm rounded-xl bg-base-200 lg:p-12 my-16">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="rating rating-lg space-x-1">
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-500"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-500"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-500"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-500"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Share your opinion!"
            className="input input-bordered input-lg w-full h-32"
          />
          <button
            type="button"
            className="btn py-4 border-none my-8 font-semibold rounded-md text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600"
          >
            Leave feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
