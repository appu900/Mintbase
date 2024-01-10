import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  const links = [
    {
      name: "Explore",
      submenu: true,
      sublinks: [
        {
          Head: "Category",
          sublink: [
            { name: "T-shirts" },
            { name: "Shirts" },
            { name: "Jeans" },
            { name: "Trousers" },
            { name: "Jackets" },
            { name: "Innerwear" },
            { name: "Suits" },
            { name: "ethinicwear" },
          ],
        },

        {
          Head: "Category",
          sublink: [
            { name: "T-shirts" },
            { name: "Shirts" },
            { name: "Jeans" },
            { name: "Trousers" },
            { name: "Jackets" },
            { name: "Innerwear" },
            { name: "Suits" },
            { name: "ethinicwear" },
          ],
        },

        {
          Head: "Category",
          sublink: [
            { name: "T-shirts" },
            { name: "Shirts" },
            { name: "Jeans" },
            { name: "Trousers" },
            { name: "Jackets" },
            { name: "Innerwear" },
            { name: "Suits" },
            { name: "ethinicwear" },
          ],
        },

        {
          Head: "Category",
          sublink: [
            { name: "T-shirts" },
            { name: "Shirts" },
            { name: "Jeans" },
            { name: "Trousers" },
            { name: "Jackets" },
            { name: "Innerwear" },
            { name: "Suits" },
            { name: "ethinicwear" },
          ],
        },
      ],
    },
    { name: "Inspiration" },
    { name: "Our Team" },
  ];
  return (
    <>
      {links.map((link) => (
        <div className="s">
          <div className="px-3 md:cursor-pointer group">
            <h1 className="py-7">{link.name}</h1>
            {link.submenu && (
              <div className="shadow-2xl z-50">
                <div className="absolute top-20 cursor-pointer hidden group-hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1"></div>
                  </div>
                  <div className="bg-white border p-5 grid grid-cols-4 z-50 gap-10 rounded-md shadow-2xl w-[600px]p-10">
                    {link.sublinks.map((mysublink) => (
                      <div>
                        <h1 className=" font-medium text-gray-500">
                          {mysublink.Head}
                        </h1>
                        <div>
                          {mysublink.sublink.map((item) => (
                            <li className="text-sm text-gray-600 my-3.5">
                              <Link className="hover:bg-gray-200 px-2 py-2 rounded-lg">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
