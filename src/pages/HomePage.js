import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Shared/Spinner";
import Layout from "../components/Shared/Layout/Layout";
import Modal from "../components/Shared/Modal/Modal";
import API from "../services/API";
import moment from "moment";

function HomePage() {
  const { loading, error } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success p-4"></i>
              Add Inventory
            </h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity(ML)</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity}</td>
                    <td>{record.donarEmail}</td>
                    <td>{moment(record.createdAt).format("DD/MM/YY hh:mm A")}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Modal />
          </div>
        </>
      )}
    </Layout>
  );
}

export default HomePage;
