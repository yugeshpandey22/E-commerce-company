import React from "react";

const InstagramFeed = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-xl font-bold mb-4">#FurnireInspiration</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <img key={i} src={`/img/insta${i}.jpg`} className="rounded-lg object-cover h-24 w-full" />
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
