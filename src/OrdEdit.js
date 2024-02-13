import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const OrdEdit = () => {
    const { empid } = useParams();

    useEffect(() => {
        fetch("http://localhost:3030/orders/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            customer_namechange(resp.customer_name);
            customer_emailchange(resp.customer_email);
            product(resp.product);
            quantity(resp.quantity);
            // activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [customer_name, customer_namechange] = useState("");
    const [customer_email, customer_emailchange] = useState("");
    const [product, productchange] = useState("");
    const [quantity, quantitychange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, customer_name, customer_email, quantity, product };


        fetch("http://localhost:3030/orders/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/admin');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={customer_name} onMouseDown={e => valchange(true)} onChange={e => customer_namechange(e.target.value)} className="form-control"></input>
                                            {customer_name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={customer_email} onChange={e => customer_emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Product</label>
                                            <input value={product} onChange={e => productchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input value={quantity} onChange={e => quantitychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default OrdEdit;