import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export class ProductService {
	getAll(): any {
		return axios.get(API_URL);
	}
}
