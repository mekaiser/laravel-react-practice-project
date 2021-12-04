import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from './Header';

const UpdateProduct = () => {

    const [data, setData] = useState();
    useEffect(() => {
        const getData = async (data) => {
            let result = await fetch("http://localhost:8000/api/product/"+id.id);
            result = await result.json();
            setData(result);
        }

        getData();
    }, [])

    const id = useParams();
    return (
        <div>
            <Header></Header>
            <h1>Update Product</h1>
            <input className="form-control" type="text" defaultValue={data?.name} /> <br />
            <input className="form-control" type="text" defaultValue={data?.price} /> <br />
            <input className="form-control" type="text" defaultValue={data?.description} /> <br />
            <input className="form-control" type="file" defaultValue={data?.file_path} /> <br />
            <img style={{width: "100px"}} src={"http://localhost:8000/"+data?.file_path} alt="" /> <br /> <br />
            <button className="btn btn-primary">Update Product</button>
        </div>
    );
};

export default UpdateProduct;