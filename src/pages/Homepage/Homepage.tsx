import React, {useEffect} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import {ProductService} from "../../services/ProductService";

type Props = {};

const Homepage = (props: Props) => {
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		let service: ProductService = new ProductService();
		service.getAll().then((response: any) => console.log(response));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-3">
					<ProductCard />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
