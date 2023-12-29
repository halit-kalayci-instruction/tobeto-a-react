import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

type Props = {};

interface ProductAddForm {
	title: string;
	description: string;
	price: number;
	stock: number;
}
const ProductAdd = (props: Props) => {
	const initialValues: ProductAddForm = {
		title: "",
		description: "",
		price: 0,
		stock: 0,
	};

	const validationSchema = Yup.object({
		title: Yup.string()
			.required("Başlık alanı zorunludur.")
			.min(2, "Başlık en az 2 haneden oluşmalıdır.")
			.max(50)
			.test(
				"is-strong",
				"Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
				value => {
					return (
						/[a-z]/.test(value || "") &&
						/[A-Z]/.test(value || "") &&
						/[0-9]/.test(value || "")
					);
				},
			),
		description: Yup.string().required().min(5).max(300),
		price: Yup.number().min(0),
		stock: Yup.number().min(0).integer(),
	});

	return (
		<div className="container mt-5">
			<Formik
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
			>
				<Form>
					<div className="mb-3">
						<label className="form-label">Ürün Adı</label>
						<Field name="title" type="text" className="form-control" />
						<ErrorMessage name="title">
							{message => <p className="text-danger">{message}</p>}
						</ErrorMessage>
					</div>

					<div className="mb-3">
						<label className="form-label">Ürün Açıklaması</label>
						<Field name="description" type="text" className="form-control" />
						<ErrorMessage name="description">
							{message => <p className="text-danger">{message}</p>}
						</ErrorMessage>
					</div>

					<div className="mb-3">
						<label className="form-label">Ürün Fiyatı</label>
						<Field name="price" type="number" className="form-control" />
						<ErrorMessage name="price">
							{message => <p className="text-danger">{message}</p>}
						</ErrorMessage>
					</div>

					<div className="mb-3">
						<label className="form-label">Ürün Stok</label>
						<Field name="stock" type="number" className="form-control" />
						<ErrorMessage name="stock">
							{message => <p className="text-danger">{message}</p>}
						</ErrorMessage>
					</div>

					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default ProductAdd;
