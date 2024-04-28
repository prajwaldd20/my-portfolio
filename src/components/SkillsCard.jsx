import React from 'react';

const SkillCard = ({ imageUrl, skillName }) => {
    return (
        <div className=" lg:w-40 w-32 p-0 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105  dark:shadow-slate-100 dark:shadow-md ">
            <img className="pt-2 lg:w-auto lg:h-24 h-12  w-auto object-cover object-center justify-center items-center m-auto rounded-lg" src={imageUrl} alt="Skill" />
            <div className="py-4 px-6">
                <h2 className="text-lg dark:text-gray-800 font-semibold text-gray-800 text-center justify-center">{skillName}</h2>
            </div>
        </div>
    );
};

export default SkillCard;

