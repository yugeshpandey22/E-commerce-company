import React from "react";

const blogPosts = [
  {
    id: 1,
    image: "/Rectangle 68 (1).png",
    title: "Going all-in with millennial design",
    date: "August 1, 2025",
    category: "Interior",
    snippet:
      "Creating a modern interior design aesthetic is more than just buying new furniture. It’s about choosing pieces that reflect your personality and lifestyle.",
  },
  {
    id: 2,
    image: "/Rectangle 68 (1).png",
    title: "Exploring new ways of decorating",
    date: "August 5, 2025",
    category: "Design",
    snippet:
      "Decorating a space isn’t just about filling it with things. It’s about creating a vibe, an energy. Find out how minimalist touches make a big impact.",
  },
  {
    id: 3,
    image: "/Rectangle 68 (1).png",
    title: "Handmade pieces that took time to make",
    date: "August 10, 2025",
    category: "Craft",
    snippet:
      "Explore the charm and character of handmade décor pieces that truly tell a story. They bring personality and uniqueness to your home.",
  },
];

const recentPosts = [
  {
    title: "Going all-in with millennial design",
    date: "Aug 1, 2025",
    thumb: "/Rectangle 69 (1).png",
  },
  {
    title: "Exploring new ways of decorating",
    date: "Aug 5, 2025",
    thumb: "/Rectangle 69 (1).png",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "Aug 10, 2025",
    thumb: "/Rectangle 69 (1).png",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        <div className="absolute inset-0 bg-white/70 flex flex-col justify-center items-center">
          <img src="/Meubel House_Logos-05.png" alt="Logo" className="w-10 h-10 mb-2" />
          <h1 className="text-2xl font-semibold">Blog</h1>
          <p className="text-sm text-gray-500 mt-1">Home &gt; Blog</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 px-4 md:px-20 py-12">
        {/* Blog Posts */}
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <p className="text-xs text-gray-500 mb-1">{post.category} | {post.date}</p>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.snippet}</p>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex gap-2 justify-center mt-10">
            <button className="w-8 h-8 flex items-center justify-center border">1</button>
            <button className="w-8 h-8 flex items-center justify-center border bg-yellow-600 text-white">2</button>
            <button className="w-8 h-8 flex items-center justify-center border">3</button>
            <button className="w-8 h-8 flex items-center justify-center border">4</button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-4 py-2 text-sm rounded"
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Crafts</li>
              <li>Design</li>
              <li>Interior</li>
              <li>Handmade</li>
              <li>Modern</li>
              <li>Ideas</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-semibold mb-2">Recent Posts</h3>
            <ul className="space-y-4 text-sm">
              {recentPosts.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-[#f9f1e7] px-4 md:px-20 py-10 text-sm">
        <div>
          <img src="/trophy 1.png" className="mx-auto mb-2 w-6 h-6" alt="quality" />
          <p className="font-semibold">High Quality</p>
          <p className="text-gray-500">crafted from top materials</p>
        </div>
        <div>
          <img src="/guarantee.png" className="mx-auto mb-2 w-6 h-6" alt="warranty" />
          <p className="font-semibold">Warranty Protection</p>
          <p className="text-gray-500">Over 2 years</p>
        </div>
        <div>
          <img src="/shipping.png" className="mx-auto mb-2 w-6 h-6" alt="shipping" />
          <p className="font-semibold">Free Shipping</p>
          <p className="text-gray-500">Order over 150 $</p>
        </div>
        <div>
          <img src="/customer-support.png" className="mx-auto mb-2 w-6 h-6" alt="support" />
          <p className="font-semibold">24 / 7 Support</p>
          <p className="text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
