import React from "react";

const Card = (props) => {
  const { imgUrl, imgAlt, ProjectNo, ProjectName, description, githubLink } = props;

  const openGitHubProject = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <div className="relative flex flex-col lg:flex-row bg-clip-border rounded-xl bg-green-200 dark:bg-red-200 text-gray-700 shadow-md w-full max-w-[48rem] transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:shadow-lg dark:shadow-slate-200">
      <div className="lg:w-1/3 lg:rounded-l-none lg:rounded-r-xl overflow-hidden">
        <img src={imgUrl} alt={imgAlt} className="object-cover mr-5 w-full h-full rounded-md" />
      </div>
      <div className="p-6 flex flex-col justify-between mr-2">
        <div>
          <h6 className="mb-2 font-sans text-sm font-semibold text-gray-700 uppercase">{ProjectNo}</h6>
          <h4 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900">{ProjectName}</h4>
          <p className="mb-4 font-sans text-sm text-gray-700">{description}</p>
        </div>
        <button onClick={openGitHubProject} className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-gray-900 uppercase transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          Github
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
