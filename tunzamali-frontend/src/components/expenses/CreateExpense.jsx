import React, {useState} from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axiosService from "../../helpers/axios";
// import {getUser} from "../hooks/user.actions";

function CreateExpense() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false)
    const[form, setForm] = useState({});

    // const user = getUser();
    const handleSubmit = (event) => {
        event.preventDefault();
        const createExpenseForm = event.currentTarget;

        if (createExpenseForm.checkValidity() === false){
            event.stopPropagation();
        }

        setValidated(true)
        const data = {
            // author: user.id,
            body:form.body,
        };

        axiosService
        // .post("/post", data)
        .post("/expenses", data)
        .then(() => {
            handleClose();
            setForm({});

        }
        )
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        // <>
        //     <Form.Group className="my-3 w-75">
        //         <Form.Control className="py-2 rounded-pill border-primary text-primary" type="text" placeholder="Add an expense"/>
        //         <Form.Control className="py-2 rounded-pill border-primary text-primary" type="text" placeholder="Add an expense"/>
        //         <Form.Control className="py-2 rounded-pill border-primary text-primary" type="text" placeholder="Add an expense"/>

        //     </Form.Group>
        //     {/* <Modal show={show} onHide={}> */}
        //     <Modal show={show} >
        //         <Modal.Header closeButton className="border-0">
        //             <Modal.Title>Create Post</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body className="border-0">
        //             <Form noValidate validated={validated} onSubmit={handleSubmit}>
        //                 <Form.Group className="mb-3">
        //                     {/* <Form.Control name="body" value={formToJSON.body} onChange={(e) => setForm({ ...form, body: e.target.value })} as="textarea" rows={3}/> */}
        //                     <Form.Control name="body" onChange={(e) => setForm({ ...form, body: e.target.value })} as="textarea" rows={3}/>

        //                 </Form.Group>
        //             </Form>
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button
        //             variant="primary"
        //             onClick={handleSubmit}
        //             disabled={form.body === undefined}
        //             >
        //             Post
        //             </Button>
        //         </Modal.Footer>
        //     </Modal>
        // </>
        // <>
        <Form>
        <h3>Add an expense</h3>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Item</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Item" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Amount</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Amount" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Payee</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Payee" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Payee" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Notes</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Notes" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
            Add expense
        </Button>
        </Form>
    );
    }
        // </>
    // );
// }

export default CreateExpense;

