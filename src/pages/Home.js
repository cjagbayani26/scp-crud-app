import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ref, onValue, off, remove } from "firebase/database";
import fireDB from "../firebase";
import { toast } from "react-toastify";
import './Home.css';

const Home = () => {
  
  const navigate = useNavigate(); 

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      const dbRef = ref(fireDB, 'data');  
      onValue(dbRef, (snapshot) => {
        if (snapshot.val() !== null) {
          setData({ ...snapshot.val() });
        } else {
          setData({});
        }
      });
    };

    fetchData();

    return () => {
        const dbRef = ref(fireDB, 'data');
        off(dbRef, 'value', fetchData);
      };
    }, []);


    const onDelete = (id) => {
        if (window.confirm("Are you sure you want to delete the selected item?")) {
          const dbRef = ref(fireDB, `data/${id}`);
          remove(dbRef, (err) => {
            if (err) {
              console.error(err.message);
              toast.error(`Error: ${err.message}`);
            } else {
              console.log("Deletion successful");
              toast.success("Item Deleted Successfully", {
                onClose: () => {
                  navigate("/");
                },
              });
            }
          });
        }
      };

  return (
    <div style={{ margin: '100px', maxWidth: '1500px' }}>
        
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Number</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Object Class</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].Name}</td>
                <td>{data[id].Class}</td>
                <td>
                    <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete" onClick={() => onDelete(id)}>Delete</button>
                    <Link to={`/view/${id}`}>
                    <button className="btn btn-view">View</button>
                    </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />
      <br />
        <footer class="copyright"><p>&#169; SCP Foundation All Right Reserved | CJ AGBAYANI - 2023</p></footer>
    </div>
  );
};

export default Home;
