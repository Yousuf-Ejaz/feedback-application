function Button({ children, type, isDisabled, version }) {
	return (
		<button
			type={type}
			disabled={isDisabled}
			className={`btn btn-${version}`}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: "button",
	isDisabled: true,
	version: "primary",
};

export default Button;
