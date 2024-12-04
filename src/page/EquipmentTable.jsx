import PropTypes from 'prop-types';

const EquipmentTable = ({equipment,idx}) => {
    const {name,category,price} = equipment
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>
            <button className="bg-[#273248] hover:text-[#273248] hover:bg-pink-200  px-4 py-2 rounded text-white">Details</button>
        </td>
      </tr>
    </>
  );
};

EquipmentTable.propTypes = {
    equipment: PropTypes.object.isRequired,
    idx: PropTypes.string.isRequired
};

export default EquipmentTable;
