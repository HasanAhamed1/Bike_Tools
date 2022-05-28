import React from "react";

const Portfolio = () => {
  return (
    <div className="m-10">
      <h1 className="text-center text-5xl">Welcome to My Portfolio</h1>
      <p><span className="font-bold">Name:</span> Md. Hasan Ahamed</p>
      <p><span className="font-bold">Email:</span> hasanahmed95695@gmail.com</p>
      <div className="flex gap-10 justify-center">
      <div className="grid gap-5 m-5">
          <h2 className="text-2xl font-bold">Educational Background</h2>
      <div>
        <h3 className="text-xl font-bold">Ranada Prasad Saha University (RPSU) </h3>
        <p>Graduating: March 2023 (Final Year Student)</p>
        <p>BSc in Computer Science and Engineering</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Govt. Tolaram College, Narayanganj</h3>
        <p>2016 - 2018</p>
        <p>Higher Secondary Certificate</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Adarsha School, Narayanganj</h3>
        <p>Passing Year - 2016</p>
        <p>Secondary School Certificate</p>
      </div>
      </div>
      <div className="grid gap-5 m-5">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div>
        <h3 className="text-xl font-bold">PROGRAMMING LANGUAGES (SOFTWARE)</h3>
        <div className="flex gap-10">
          <div>
          <p>C</p>
          <p>Java</p>
          <p>SQL</p>
          <p>MongoDB</p>
          </div>
          <div>
          <p className="font-bold">AI:</p>
          <p>Python</p>
          <p>Prolog</p>
          </div>
          <div>
            <p className="font-bold">Networking:</p>
          <p>CISCO</p>
          </div>
        </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">PROGRAMMING LANGUAGES (WEB)</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>Java Script</p>
          <p>Node JS</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">FRAME WORK</h3>
          <p>Bootstrap</p>
          <p>Tailwind</p>
          <p>React JS</p>
          <p>Daisyui</p>
        </div>
      </div>
      </div>
      <div><a href="https://verdant-faun-275d7d.netlify.app/">first website</a></div>
      <div><a href="https://verdant-faun-275d7d.netlify.app/">Second website</a></div>
    </div>
  );
};

export default Portfolio;