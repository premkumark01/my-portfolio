import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import postgresql from "../assets/postgresql.png";
import redux from "../assets/redux.png";
import firebase from "../assets/firebase.png";
import kubernetes from "../assets/kubernetes.png";
import azure from "../assets/azure.png";
import docker from "../assets/docker.png";
import bootstrap from "../assets/bootstrap.png";

const Skills = () => {
  return (
    <div>
      <div className="border border-gray-600 bg-black text-gray-400 md:h-[50px] max-w-[1200px] mx-auto text-2xl md:text-4xl font-bold md:flex md:items-center rounded-l">
        <h1 className="m-4">My Tech Stack</h1>
      </div>
      <div
        className="border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4
                    place-items-center md:flex md:justify-between md:items-center rounded-l"
      >
        <h2 className="text-gray-400 text-2xl md:text-4xl font-bold m-4">
          Front <br /> End
        </h2>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} alt="" />
          <p className="mt-2">HTML</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} alt="" />
          <p className="mt-2">CSS</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={javascript} alt="" />
          <p className="mt-2">JavaScript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} alt="" />
          <p className="mt-2">React</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={redux} alt="" />
          <p className="mt-2">Redux</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={tailwind} alt="" />
          <p className="mt-2">Tailwind</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={bootstrap} alt="" />
          <p className="mt-2">Bootstrap</p>
        </div>
      </div>
      <div
        className="border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4
                    place-items-center md:flex md:justify-between md:items-center rounded-l"
      >
        <h2 className="text-gray-400 text-2xl md:text-4xl font-bold m-4">
          Back <br /> End
        </h2>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={node} alt="" />
          <p className="mt-2">Node</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={express} alt="" />
          <p className="mt-2">Express</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={postgresql} alt="" />
          <p className="mt-2">Postgresql</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={azure} alt="" />
          <p className="mt-2">Azure</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={kubernetes} alt="" />
          <p className="mt-2">Kubernetes</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={docker} alt="" />
          <p className="mt-2">Docker</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={firebase} alt="" />
          <p className="mt-2">Firebase</p>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
