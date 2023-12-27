import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import {ProductService} from "../../services/ProductService";
import {ProductModel} from "../../models/responses/ProductModel";

type Props = {};

const Homepage = (props: Props) => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		let service: ProductService = new ProductService();
		service.getAll().then(response => {
			setProducts(response.data.products);
		});
	};

	return (
		<div className="container">
			<div className="row">
				{products.map(product => (
					<div className="col-3">
						<ProductCard />
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage;
