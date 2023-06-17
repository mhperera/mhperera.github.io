import React from 'react';
import H1 from './../../../UI/Headings/H1';
import Section from './../../../UI/Section';

const Introduction = () => {
	return (
		<Section>
			<H1>Manasha H Perera</H1>
			<p className='p-0'>
				I am a self-learning
				<span className="highlight-secondary">front-end engineer</span>
				with years of experience in PHP CodeIgniter
				<span className="highlight-secondary">
					full-stack development
				</span>
				. My interests are all about creating web experiences that are
				visually stunning. Additionally, I take great pride in being a
				highly effective self-learner and goal achiever. I am driven by
				a relentless pursuit of knowledge and possess the determination
				to overcome challenges and accomplish objectives. With a
				tenacious spirit and a growth mindset, I continuously push
				myself to expand my skills and achieve excellence in every
				endeavor.
			</p>

			{/* <p>
				Dive into my website and witness the skills that are packed into
				an impressive portfolio.
			</p> */}

			{/* <p>
				I'm utterly captivated by nature's splendor, the tall and mighty
				trees , and the adorable antics of animals . And when I'm not
				busy coding, you'll find me in my happy place, surrounded by my
				tight-knit squad of loved ones.
			</p> */}
		</Section>
	);
};

export default Introduction;
