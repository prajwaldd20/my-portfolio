import React from 'react';

const SkillCard = ({ imageUrl, skillName }) => {
    return (
        <div className=" w-40 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105  dark:shadow-slate-100 dark:shadow-md ">
            <img className=" w-auto h-24 object-cover object-center justify-center items-center m-auto " src={imageUrl} alt="Skill" />
            <div className="py-4 px-6">
                <h2 className="text-lg font-semibold text-gray-800 text-center">{skillName}</h2>
            </div>
        </div>
    );
};

export default SkillCard;

