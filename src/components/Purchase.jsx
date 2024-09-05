/* eslint-disable react/no-unescaped-entities */
import "./purchase.css";
import { useState } from "react";
import { Button,Form } from "react-bootstrap";
const Purchase = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        transactionId: '',
        image: null,
        duration: ''
    });
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
};
  return (
    <div className="addPurchase">
      <h3>Purchase Information</h3>
      <Form onSubmit={handleSubmit}className="addPurchaseForm">
           <div className="inputGroupForm">
           <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="transactionId">
                <Form.Label>Transaction ID</Form.Label>
                <Form.Control
                    type="text"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="image">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                    required
                />
            </Form.Group>

            <Form.Group controlId="duration">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                    as="select"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Duration</option>
                    <option value="1">1 Day</option>
                    <option value="7">1 Week</option>
                    <option value="30">1 Month</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
           </div>
        </Form>
      </div>
     
  );
};

export default Purchase;
