import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Shared/Spinner";
import Layout from "../components/Shared/Layout/Layout";
function HomePage() {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
    <>
    {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus text-success p-4"></i>
            Add Inventory
          </h4>
        </>
      )}
    </Layout>
          <h1>Home Page</h1>
        </>
      )}
    </>
  );
}

export default HomePage;
