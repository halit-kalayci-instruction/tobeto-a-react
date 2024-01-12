import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://dummyjson.com/",
});

axiosInstance.interceptors.request.use(config => {
	config.headers.Authorization = "My Token";
	return config;
});

axiosInstance.interceptors.response.use(
	value => {
		console.log("Başarılı bir cevap alındı..");
		return value;
	},
	error => {
		if (error.type == "BusinessException") {
			// error.message => toastr ile göster
		}
	},
);

export default axiosInstance;
