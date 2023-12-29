import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {ProductModel} from "../../models/responses/ProductModel";
import ProductService from "../../services/productService";

type Props = {};

const ProductDetail = (props: Props) => {
	//const location = useLocation(); //query string
	const params = useParams<{id: string}>(); // location
	const [product, setProduct] = useState<ProductModel>();

	useEffect(() => {
		if (params.id) {
			ProductService.getById(parseInt(params.id)).then(response => {
				setProduct(response.data);
			});
		}
	}, []);

	return (
		<div>
			<p>{product?.title}</p>
		</div>
	);
};
export default ProductDetail;
