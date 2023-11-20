import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {ref, push, onValue, off, set} from "firebase/database";
import fireDB from "../firebase";
import {toast} from "react-toastify";
import './AddUpdate.css';


const initialState = {
    Name: "",
    Class: "",
    Description: "",
    Containment: "",

}


const AddUpdate = () => {

    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const{Name, Class, Description, Containment} = state;

    const {id} = useParams();

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
    }, [id]);
    
    useEffect(() => {
        if (id && data[id]) {
            setState({ ...data[id] });
        } else {
            setState({ ...initialState });
        }
    
        return () => {
            setState({ ...initialState });
        };
    }, [id, data]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Name || !Class || !Description || !Containment) {
          toast.error("Please provide input value in each field");
        } else {
          const dbRef = ref(fireDB, 'data');
      
          if (!id) {
            // Creating a new item
            push(dbRef, state)
              .then(() => {
                toast.success("New Item Successfully Added", {
                  onClose: () => navigate("/"),
                });
              })
              .catch((err) => {
                console.error(err);
                toast.error(err.message);
              });
          } else {
            // Updating an existing item
            const itemRef = ref(dbRef, id); // Reference to the specific item
            set(itemRef, state) // Use the 'set' function to update the data
              .then(() => {
                toast.success("Item Updated Successfully", {
                  onClose: () => navigate("/"),
                });
              })
              .catch((err) => {
                console.error(err);
                toast.error(err.message);
              });
          }
        }
      };
    return (
        <div style={{marginTop: "100px"}}>
            <form 
            style={{
                margin: "auto", 
                padding: "15px", 
                maxWidth: "600px", 
                alignContent: "center",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="Name">Name: </label>
                <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Item name"
                value={state.Name || ""}
                onChange={handleInputChange}
                />
                <label htmlFor="Class">Object Class: </label>
                <input
                type="text"
                id="Class"
                name="Class"
                placeholder="Object class"
                value={state.Class || ""}
                onChange={handleInputChange}
                />
                <label htmlFor="Description">Description: </label>
                <input
                type="text"
                id="Description"
                name="Description"
                placeholder="Item description"
                value={state.Description || ""}
                onChange={handleInputChange}
                />
                <label htmlFor="Containment">Containment: </label>
                <input
                type="text"
                id="Containment"
                name="Containment"
                placeholder="Containment procedure"
                value={state.Containment || ""}
                onChange={handleInputChange}
                />

                
                <input type="submit" value={id ? "Update" : "Create New Item"}/>
            </form>

            <footer class="copyright"><p>&#169; SCP Foundation All Right Reserved | CJ AGBAYANI - 2023</p></footer>
        </div>
    )
}

export default AddUpdate;