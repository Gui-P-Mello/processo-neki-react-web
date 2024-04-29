// src/components/Home.js
import React from 'react';
import { getSkills } from '../api/skills';

const Home = () => {
 const [skills, setSkills] = React.useState([]);

 React.useEffect(() => {
    const fetchSkills = async () => {
      const result = await getSkills();
      setSkills(result.data);
    };
    fetchSkills();
 }, []);

 return (
    <div>
      {skills.map(skill => (
        <div key={skill.id}>
          <img src={skill.imageUrl} alt={skill.name} />
          <span>{skill.name}</span>
          <input type="number" value={skill.level} onChange={e => updateSkillLevel(skill.id, e.target.value)} />
          <button onClick={() => deleteSkill(skill.id)}>Excluir</button>
        </div>
      ))}
    </div>
 );
};

export default Home;
