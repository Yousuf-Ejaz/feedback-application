function Header({ bgColor, textColor }) {
	const PageStyle = { backgroundColor: bgColor, color: textColor };
	return (
		<header style={PageStyle}>
			<div className="container">
				<h1>FEEDBACK APP</h1>
			</div>
		</header>
	);
}

Header.defaultProps = {
	bgColor: "rgba(0,0,0,0.4)",
	textColor: "#ff6a95",
};
export default Header;
