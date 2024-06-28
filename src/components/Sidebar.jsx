import React from "react";

const Sidebar = (props) => {
	const { data, handleToggleModal } = props;

	return (
		<div className='sidebar'>
			<div className='bgOverlay' onClick={handleToggleModal}>
				<div className='sidebarContents'>
					<h2>{data?.title}</h2>
					<div className="descriptionContainer">
						<p className="descriptionTitle">{data?.date}</p>
						<p>{data?.explanation}</p>
					</div>
					<button>
						<i
							className='fa-solid fa-arrow-left'
							onClick={handleToggleModal}></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
