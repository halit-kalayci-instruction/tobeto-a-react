import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export default function Homepage() {
	const myAsyncFunction = () => {
		return new Promise((resolve, reject) => {
			reject("HTTP VERİSİ");
		});
	};

	useEffect(() => {
		myAsyncFunction()
			.then(response => {
				console.log("İşlem başarılı cevap:", response);
			}) // async işlem başarılı ise (resolve edildi ise)
			.catch(error => {
				console.log("İşlem başarısız cevap:", error);
			}) // async işlem başarısız ise (reject edildi ise)
			.finally(() => {
				console.log("İşlem bitti");
			}); // her halükarda en son çalışır
		console.log("Merhaba");
	}, []);

	return (
		<div>
			<button className="btn btn-primary">Homepage</button>
			<br />
			{/* SPA'larda href kullanımı yanlıştır. */}
			<Link to={"/about"}>About'a Git</Link>
		</div>
	);
}
