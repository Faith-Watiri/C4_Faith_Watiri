import React from 'react';
import Button from './components/Button';



const MyPortfolio = () => {

    const fullName = 'Faith Watiri';
    const education = 'Bachelor in computer science';
    const professionalBackground = 'Front-end developer';
    const skills = ['Coding', 'Network troubleshooting','Cloud computing'];

    return (

        <div>
            <h1>{fullName}'s Portfolio</h1>

            <section>
                <h2>Education</h2>
                <p>{education}</p>
</section>
<Button label="test"/>

<section>
                <h2>Professional Background</h2>
                <p>{professionalBackground}</p>
</section>

<section>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) =>(<li key={index}>{skill}</li>)) }
                </ul>
                
</section>

        </div>
    );

};

export default MyPortfolio;