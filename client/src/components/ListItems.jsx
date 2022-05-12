import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../App";
import { GetItems } from "../store/actions/itemActions";

const ListItems = () => {
  const url = useContext(MyContext);
  const { items, itemLoading, itemErr } = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetItems(url));
  }, []);
  return (
    <div className="container mt-5">
      <table class="table table-hover">
        <thead className="table-success">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Photo</th>
            <th scope="col">Kode</th>
            <th scope="col">Status</th>
            <th scope="col">Price</th>
            <th scope="col" style={{ width: "13%" }}></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={item.imageUrl} alt={item.name} width="200" />
                </td>
                <td>{item.kode}</td>
                <td>
                  <span class="badge rounded-pill bg-success">{item.status}</span>
                </td>
                <td>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(item.price)}</td>
                <td>
                  <button type="button" class="btn btn-info">
                    edit
                  </button>
                  <button type="button" class="btn btn-danger ms-2">
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItems;
