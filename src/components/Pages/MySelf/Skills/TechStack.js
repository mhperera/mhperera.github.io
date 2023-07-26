import React from 'react';
import Section from './../../../UI/Section';
import H1 from './../../../UI/Headings/H1';
import TechGroup from './TechGroup';

const TechStack = (props) => {
	return (
		<Section>
			<H1>Expertise</H1>

            <div className="TechList">
                {
                    props.TechStack && props.TechStack.map((tech) => (
                        <TechGroup
                            key={tech.name}
                            name={tech.name}
                            stage={tech.stage}
                        />
                    ))
                }
            </div>

		</Section>
	);
};

export default TechStack;
