import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../App";
import { GetCompanies } from "../store/actions/companyActions";
import { Navbar } from "./index";

const ListCompanies = () => {
  const url = useContext(MyContext);
  const { companies, compLoading, compErr } = useSelector((state) => state.companyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCompanies(url));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <table class="table table-hover">
          <thead className="table-success">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Logo</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col" style={{ width: "13%" }}></th>
            </tr>
          </thead>
          <tbody>
            {companies.map((comp, index) => {
              return (
                <tr key={comp.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={comp.logo} alt={comp.name} width="200" />
                  </td>
                  <td>{comp.name}</td>
                  <td>{comp.address}</td>
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
    </>
  );
};

export default ListCompanies;
