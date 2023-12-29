import React from "react";

type Props = {};

const ProductAdd = (props: Props) => {
	return (
		<div className="container mt-5">
			<form>
				<div className="mb-3">
					<label className="form-label">Ürün Adı</label>
					<input type="text" className="form-control" />
				</div>

				<div className="mb-3">
					<label className="form-label">Ürün Açıklaması</label>
					<input type="text" className="form-control" />
				</div>

				<div className="mb-3">
					<label className="form-label">Ürün Fiyatı</label>
					<input type="text" className="form-control" />
				</div>

				<div className="mb-3">
					<label className="form-label">Ürün Stok</label>
					<input type="text" className="form-control" />
				</div>

				<button type="submit" className="btn btn-primary">
					Kaydet
				</button>
			</form>
		</div>
	);
};

export default ProductAdd;
