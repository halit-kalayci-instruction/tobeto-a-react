import {ErrorMessage, Field} from "formik";

type Props = {
	label: string;
	name: string;
	type?: string; // type: string | undefined
};

const FormikInput = (props: Props) => {
	return (
		<div className="mb-3">
			<label className="form-label">{props.label}</label>
			<Field
				name={props.name}
				type={props.type || "text"}
				className="form-control"
			/>
			<ErrorMessage name={props.name}>
				{message => <p className="text-danger">{message}</p>}
			</ErrorMessage>
		</div>
	);
};

export default FormikInput;
