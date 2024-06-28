import React from "react";

const Main = (props) => {
	const { data } = props;

	return (
		<div className='imgContainer'>
			<img src={data?.hdurl} alt={data?.title} className='bgImage' />
		</div>
	);
};

export default Main;
