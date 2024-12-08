import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EquipmentList = () => {
  const equipmentList = useLoaderData();
  const [allEquipment,setAllEquipment] = useState(equipmentList)

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipment/${id}`,{
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
              const remaining = allEquipment.filter(equip => equip._id !== id);
              setAllEquipment(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Equipment List
      </h2>

      {/* Responsive Table for Desktop and Tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="px-4 py-2 border">Photo</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Stock</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Added By</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEquipment.map((equipment, index) => (
              <tr
                key={equipment._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 border text-center">
                  <img
                    src={equipment.photo}
                    alt={equipment.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-2 border text-center">
                  {equipment.name}
                </td>
                <td className="px-4 py-2 border text-center">
                  {equipment.category}
                </td>
                <td className="px-4 py-2 border text-center">
                  {equipment.status}
                </td>
                <td className="px-4 py-2 border text-center">
                  ${equipment.price}
                </td>
                <td className="px-4 py-2 border text-center">
                  <p className="font-semibold">{equipment.username}</p>
                  <p className="text-sm text-gray-600">{equipment.email}</p>
                </td>
                <td className="px-4 py-2 border text-center">
                 <Link to={`/updateEquipment/${equipment._id}`}>
                 <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">
                    Update
                  </button>
                 </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Cards for Mobile */}
      <div className="block md:hidden">
        {allEquipment.map((equipment) => (
          <div
            key={equipment._id}
            className="bg-white shadow-md rounded-lg p-4 mb-6"
          >
            <div className="flex items-center mb-4">
              <img
                src={equipment.photo}
                alt={equipment.name}
                className="w-16 h-16 object-cover rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{equipment.name}</h3>
                <p className="text-sm text-gray-600">{equipment.category}</p>
              </div>
            </div>
            <p className="text-gray-600">
              <strong>Stock:</strong> {equipment.status}
            </p>
            <p className="text-gray-600">
              <strong>Price:</strong> ${equipment.price}
            </p>
            <p className="text-gray-600">
              <strong>Added By:</strong> {equipment.username} ({equipment.email}
              )
            </p>
            <div className="mt-4 flex justify-between">
            <Link to={`/updateEquipment/${equipment._id}`}>
                 <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">
                    Update
                  </button>
                 </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList;
