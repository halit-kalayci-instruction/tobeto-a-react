import axiosInstance from "../utils/interceptors/axiosInterceptors";

class AuthService {
	login(loginModel: any) {
		return axiosInstance.post("auth/login", loginModel);
	}
}

export default new AuthService();
