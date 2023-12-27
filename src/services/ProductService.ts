import axios, {AxiosResponse} from "axios";
import {GetAllProductsModel} from "../models/responses/GetAllProductsModel";
import {ProductModel} from "../models/responses/ProductModel";

const API_URL = "https://dummyjson.com/products";

class ProductService {
	getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
		return axios.get<GetAllProductsModel>(API_URL);
	}

	getById(id: number) {
		return axios.get<ProductModel>(API_URL + "/" + id);
	}

	delete(id: number) {
		return axios.delete<ProductModel>(API_URL + "/" + id);
	}
}

// import ederken direkt bir instance sunar.
export default new ProductService();
