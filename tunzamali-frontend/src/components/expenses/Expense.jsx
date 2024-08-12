import React, {useState} from "react";
import {Image, Card, Dropdown} from "react-bootstrap";
import axiosService from "../../helpers/axios";


function Expense(props){
    const {expense, refresh } = props;

    // useEffect(() => {
    //     axios.get('/yourmodel/')
    //       .then(response => {
    //         setData(response.data);
    //       })
    //       .catch(error => {
    //         console.error("There was an error!", error);
    //       });
    // }, []);
    
    

    const handleLikeClick = (action) => {
        axiosService
          .post(`/expense/${expense.id}/${action}/`)
          .then(() => {
            refresh();
          })
          .catch((err) => console.error(err));
    };
    return (
        <Card className="rounded-3 my-4">
            <Card.Body>
                <p>{expense.item}</p>
                <p>{expense.amount}</p>
                <p>{expense.payee}</p>
                <p>{expense.category}</p>
                <p>{expense.notes}</p>
            </Card.Body>
        </Card>
    )
}

export default Expense;