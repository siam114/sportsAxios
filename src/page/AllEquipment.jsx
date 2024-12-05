import { useLoaderData } from "react-router-dom";
import EquipmentTable from "./EquipmentTable";

const AllEquipment = () => {
    const equipmentData = useLoaderData();
    // console.log(equipmentData)

  return (
    <div className="py-10 bg-[#F4F3F0] ">
        <h1 className="text-center text-4xl text-[#273248] font-bold mb-8">All Sports Equipment Table</h1>
      <div className="w-[400px] mx-auto mb-4">
        <input
        //   onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search"
          className="input input-bordered w-full"
          required
        />
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
             {
                equipmentData.length === 0? (<p>No Data Found</p>) : (equipmentData.map((equipment,index) =>(
                    <EquipmentTable 
                       key={equipment._id}
                       idx={index}
                       equipment={equipment}
                       />
                )))
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
