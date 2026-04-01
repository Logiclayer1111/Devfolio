import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesFrontend, technologiesBackend, technologiesDatabase, technologiesOthers } from "../constants";

const Tech = () => {
  const renderTechs = (techs, title) => (
    <div className="mb-8">
      <h3 className="text-white text-2xl font-black mb-6 text-center">
        {title}
      </h3>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {techs.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='flex flex-col gap-12'>
      {renderTechs(technologiesFrontend, "Frontend")}
      {renderTechs(technologiesBackend, "Backend")}
      {renderTechs(technologiesDatabase, "Database")}
      {renderTechs(technologiesOthers, "Others")}
    </div>
  );
};

export default SectionWrapper(Tech, "");
