import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ref, get } from "firebase/database";
import fireDB from "../firebase";
import { toast } from "react-toastify";
import './View.css';

const View = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(fireDB, `data/${id}`);
        const snapshot = await get(dbRef);
        
        if (snapshot.exists()) {
          setItem({ ...snapshot.val() });
        } else {
          setItem({});
          toast.error("Item not found");
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Item Details</p>
        </div>
        <div className="container">
          <strong>Name: <br /></strong>
          <span>{item.Name}</span>
          <br />
          <br />
          <strong>Object Class: <br /></strong>
          <span>{item.Class}</span>
          <br />
          <br />
          <strong>Description: <br /></strong>
          <span>{item.Description}</span>
          <br />
          <br />
          <strong>Containment: <br /></strong>
          <span>{item.Containment}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>

      <br />
            <footer class="copyright"><p>&#169; SCP Foundation All Right Reserved | CJ AGBAYANI - 2023</p></footer>
    </div>
  );
}

export default View;
