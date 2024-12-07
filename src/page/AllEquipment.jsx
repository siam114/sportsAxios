import { useEffect, useState } from "react";
import EquipmentTable from "./EquipmentTable";

const AllEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  // Fetch data from the backend with sorting
  const fetchEquipments = async () => {
    const response = await fetch(`http://localhost:5000/equipment?sortOrder=${sortOrder}`);
    const data = await response.json();

    // Convert the price to number for sorting purposes
    const updatedData = data.map((item) => ({
      ...item,
      price: Number(item.price)
    }));


    updatedData.sort((a, b) => {
      if (sortOrder === 1) {
        return a.price - b.price;  
      } else {
        return b.price - a.price;  
      }
    });

    setEquipments(updatedData);  
  };

  
  useEffect(() => {
    fetchEquipments();
  }, [sortOrder]);

  return (
    <div className="py-10 bg-[#F4F3F0]">
      <h1 className="text-center text-4xl text-[#273248] font-bold mb-8">
        All Sports Equipment Table
      </h1>

     
      <div className="w-[400px] mx-auto mb-4 flex justify-center gap-4">
        <button
          onClick={() => setSortOrder(1)} 
          className="bg-[#273248] hover:bg-red-400 text-white px-3 py-1 text-sm rounded"
        >
          Sort by Price: Low to High
        </button>
        <button
          onClick={() => setSortOrder(-1)}
          className="bg-[#273248] hover:bg-red-400 text-white px-3 py-1 text-sm rounded"
        >
          Sort by Price: High to Low
        </button>
      </div>

      <div className="md:w-1/2 w-full mx-auto bg-slate-50 md:px-10">
        <div className="md:overflow-x-auto overflow-x-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Item Name</th>
                <th>Category Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {equipments.map((equipment, index) => (
                <EquipmentTable
                  key={equipment._id}
                  idx={index}
                  equipment={equipment}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
