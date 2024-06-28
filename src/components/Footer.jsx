import React from "react";

const Footer = (props) => {
	const { data, handleToggleModal } = props;
	return (
		<footer>
			<div className='bgGradient'>
				<h1>NASA Picture of the day</h1>
				<h2>{data?.title}</h2>
			</div>
			<button onClick={handleToggleModal}>
				<i className='fa-solid fa-circle-info'></i>
			</button>
		</footer>
	);
};

export default Footer;
