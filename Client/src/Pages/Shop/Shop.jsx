import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context/MainContext";
import LeftSlideber from "./LeftSlideber";
import { IoMdClose } from "react-icons/io";
import ProductCart from "../../Components/Ui/ProductCart";

const Shop = () => {
  const {
    finterItems,
    products,
    category,
    filterProducts,
    search,
  } = useContext(MainContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);

     useEffect(() => {
      window.scrollTo(0, 0)
  }, []);
  // ✅ Fix: Reset sidebar state on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    finterItems();
  }, [category, products, search]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Filter button (mobile only) */}
      <div className="flex items-center justify-end customContainer py-2 min-h-12 md:min-h-0">
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-xs md:hidden text-white font-semibold bg-red-600 rounded py-1 px-2"
          >
            Filter
          </button>
        )}
      </div>

      <div className="flex flex-1">
        {/* Sidebar (Desktop - Fixed) */}
        <aside className="hidden md:block w-1/5 bg-white shadow-md fixed top-22 left-0 h-[calc(100vh-4rem)] overflow-y-auto">
          <LeftSlideber />
        </aside>

        {/* Sidebar (Mobile Drawer) */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className={`w-3/4 sm:w-1/2 bg-white shadow-md h-full overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="font-bold text-lg">Filters</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  <IoMdClose />
                </button>
              </div>
              <LeftSlideber />
            </div>

            {/* Transparent overlay */}
            <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
          </div>
        )}

        {/* Products Section */}
        <main className="flex-1 p-5 md:ml-[20%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filterProducts.map((product) => (
              <ProductCart key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            <button className="px-3 py-1 border rounded">Previous</button>
            <button className="px-3 py-1 border bg-blue-500 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
