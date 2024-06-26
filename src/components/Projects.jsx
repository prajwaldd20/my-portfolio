import Card from "./Card";

const Projects = () => {
  return (
    <div name="projects"className=" px-4  lg:px-10 lg:h-screen lg:mt-12 ">
      <h1 className="text-3xl font-semibold ml-7 underline mt-8 lg:mt-32 dark:text-gray-50">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 gap-y-12 m-4 lg:m-6">
        <Card  
          imgUrl="/images/chat.png"
          imgAlt="Chat App"
          ProjectNo="Project 1"
          ProjectName="Basic Chat Application"
          description="It is a basic chat application using HTML, CSS, JS, NodeJS, ExpressJS & Websockets. Users from different places can join the chat and have a conversation in real time"
          githubLink="https://github.com/prajwaldd20/CodeClauseInternship_ChatApp"
        />
        <Card
          imgUrl="/images/music.png"
          imgAlt="Music Player"
          ProjectNo="Project 2"
          ProjectName="Responsive Music Player"
          description="It is a Music Player having some great features. The Tech Stack includes - HTML, CSS & JS. You can play, pause, seek, change or jump to any part of the song."
          githubLink="https://github.com/prajwaldd20/CodeClauseInternship_MusicPlayer"
        />
        <Card
          imgUrl="/images/gemini.jpg"
          imgAlt="Gemini Clone"
          ProjectNo="Project 3"
          ProjectName="Google Gemini Clone"
          description="It is a clone of Google Gemini using React and Tailwind CSS. It is fully functional and uses the Gemini API."
        />
        <Card
          imgUrl="/images/twitter.png"
          imgAlt="Twitter Sentiment Analysis"
          ProjectNo="Project 4"
          ProjectName="Twitter Sentiment Analysis using ML"
          description="In this ML project, I have performed sentiment analysis on Twitter aka X data. The project is based on NLP. The major tech stack includes - Python, Numpy, Pandas, Scikit Learn, Textblob, & other necessary libraries."
        />
      </div>
    </div>
  );
};

export default Projects;
