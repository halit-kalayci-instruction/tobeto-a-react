import React from "react";
import {ProductModel} from "../../models/responses/ProductModel";
import {Link} from "react-router-dom";

type Props = {
	product: ProductModel;
	title?: string; // (opsiyonel)
};

const ProductCard = (props: Props) => {
	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={"/product-detail?id=" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button className="btn btn-danger">Sil</button>
			</div>
		</div>
	);
};

export default ProductCard;
