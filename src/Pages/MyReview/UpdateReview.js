import React from "react";

const UpdateReview = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <form className="w-full">
            <input
              type="text"
              name="userName"
              defaultValue={""}
              placeholder="Your name here"
              className="input input-bordered input-info w-[80%] ml-[10%]"
            />
            <input
              type="text"
              name="email"
              defaultValue={""}
              readOnly
              placeholder="Your email here"
              className="input input-bordered input-info w-[80%] ml-[10%] my-4"
            />
            <textarea
              className="textarea textarea-info w-[80%] ml-[10%]"
              placeholder="Feedback"
              name="feedback"
            ></textarea>
            <button className="btn btn-active btn-ghost hover:bg-indigo-500 hover:dark:text-white w-80 ml-[10%] lg:ml-[18%] ">
              Give Feedback
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default UpdateReview;
