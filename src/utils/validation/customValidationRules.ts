export const passwordRule = (value: string) => {
	return (
		/[a-z]/.test(value || "") &&
		/[A-Z]/.test(value || "") &&
		/[0-9]/.test(value || "")
	);
};
