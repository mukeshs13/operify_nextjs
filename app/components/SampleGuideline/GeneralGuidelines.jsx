import React from 'react';

const GeneralGuidelines = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-600 mb-4">General Guidelines</h3>
      </div>
      
      <div className="prose max-w-none">
        <ul className="space-y-4 text-gray-700 leading-relaxed pl-5">
          <li className="list-disc">
            Please complete the Sample Initiation Form (SIF), ensuring that the
            sample names on the form match the labels on the sample tubes. We also
            request that you send an electronic copy of the form and any required QC
            data via email.
          </li>
          <li className="list-disc">
            Each tube should be labeled on the lid with a maximum of 4-6
            alphanumeric characters (e.g., 4B0001). Use a black permanent marker to
            write sample names on the top and side of each tube. Avoid writing
            directly on the tube wall or cover with an oil pen.
          </li>
          <li className="list-disc">
            DNA can be submitted in DNase-free water, Elution Buffer, or 10mM Tris
            pH 8.0. DNA samples should have an OD260/280 ratio as close to 1.8~2.0
            as possible. All DNA should be RNase-treated and free from degradation
            or contamination. Ship with ice packs. The total amount of DNA required
            depends on the specific application.
          </li>
          <li className="list-disc">
            RNA can be submitted in RNase-free water, RNA Stabilization Reagent, or
            10mM Tris pH 8.0. All total RNA samples should be DNA-free, with an OD
            A260/A280 ratio ≥ 1.8, A260/230 ratio ≥ 1.8, and a RIN ≥ 6. Ship with
            dry ice. The total amount of RNA required depends on the specific
            application. For Long Read Sequencing, RNA samples should have a RIN ≥
            8.
          </li>
          <li className="list-disc">
            The listed concentrations should be determined by fluorometry (e.g.,
            PicoGreen/Qubit/RiboGreen). If using spectrophotometry (e.g., Nanodrop),
            increase concentrations by approximately twofold.
          </li>
          <li className="list-disc">
            The quality inspection method for the sizes and concentrations of the
            Ready To Run Library is Qubit and Agilent Bioanalyzer.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralGuidelines;