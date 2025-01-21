import React from "react";

function Card({username = "HC", post = "Not Assigned Yet"}) {
  return (
    <div>
      {/* <img src='https://images.pexels.com/photos/29877248/pexels-photo-29877248/free-photo-of-aerial-view-of-stunning-icelandic-waterfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
        <h1 classNameName='text-2xl bg-green-500 p-3 rounded'>A card for Photo</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p> */}
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/29877248/pexels-photo-29877248/free-photo-of-aerial-view-of-stunning-icelandic-waterfall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
