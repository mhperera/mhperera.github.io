import React from 'react';
import Section from './../../../UI/Section';
import Detail from './Detail';

const GeneralDetails = (props) => {
	return (
		<Section className="semi-section">
			{props.PersonalDetails.map((detail) => (
				<Detail
					key = {detail.id}
					title = {detail.title}
					value = {detail.value}
				/>
			))}
		</Section>
	);
};

export default GeneralDetails;
