// components/PackagingShipping/ShippingTemperatureTable.jsx
import React from 'react';

const ShippingTemperatureTable = () => {
  const shippingData = [
    {
      sampleType: 'Blood',
      tooltip: 'Collect sample in 2mL EDTA tube for DNA, Collect sample in 2.5mL paxgen/tempus tube for RNA',
      volume: '2/2.5ml',
      conditions: 'DNA- 4 Degree (Cool Packs)/ RNA-Dry ice, overnight'
    },
    {
      sampleType: 'Plant Tissue',
      tooltip: 'Slice tissue into small pieces (<0.5cm) using a sterile scalpel and submerged in 100% Ethanol.',
      volume: '1gm',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Soil Samples',
      tooltip: 'Soil samples are collected and then immediately transferred to 4 degree',
      volume: '100 mg',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Fecal Samples',
      tooltip: 'Fecal samples are collected then immediately transferred to 4 degree',
      volume: '100 mg',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Bacterial Culture',
      tooltip: 'Collect an appropriate amount of bacterial liquid into a 50 mL centrifuge tube, centrifugate at a low speed (3000-5000g/10min) with a 4 °C horizontal centrifuge to collect bacteria, and remove the culture medium as clean as possible. Add 5-10 mL sterile water or PBS solution to wash twice, then transfer it to a 1.5 mL or 2.0 mL centrifuge tube, centrifuge at 1500 rpm at 4 °C for 10min, remove the supernatant, and retain the precipitated bacteria.',
      volume: '',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Water',
      tooltip: 'Samples should be taken from at least 10-20 mL of water or slightly turbid water in falcon tube',
      volume: '50 mL',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Plasma/ Serum',
      tooltip: 'Plasma is separated from blood using 4 degree centrifugation, aliquoted in 2ml cryovials and Stored at -80 degrees',
      volume: '10 mL',
      conditions: 'Dry Ice'
    },
    {
      sampleType: 'Animal Tissue',
      tooltip: 'Slice tissue into small pieces (<0.5cm) using a sterile scalpel and submerged in 100% Ethanol.',
      volume: '1gm',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Cell',
      tooltip: 'The cells in the culture bottle/dish were gently blown and mixed with a pipette gun, and transferred to a 15 mL centrifuge tube, horizontal centrifuge, centrifuge 400g~1000g at 4 °C for 5-10 minutes to collect cells and discard the supernatant, Carefully wash the flake sediment twice with precooled PBS, place it on ice, and discard the supernatant.',
      volume: '1x10⁶ cells',
      conditions: 'Dry ice, overnight'
    },
    {
      sampleType: 'Fresh Tissue',
      tooltip: 'The fresh tissue should be fixed with formaldehyde for no more than 24h. If a pretreatment kit is used, the fixing time shall be in accordance with the requirements of the kit. FFPE chips can be transported at room temperature.',
      volume: '10 mg',
      conditions: 'Room temperature'
    },
    {
      sampleType: 'FFPE block/ slides',
      tooltip: '',
      volume: '>20% tumor content',
      conditions: 'Room temperature'
    },
    {
      sampleType: 'FFPE block/ slides',
      tooltip: '',
      volume: '≥ 4 FFPE slides, thickness 5 to 20 µm, area >150 mm²',
      conditions: 'Room temperature'
    },
    {
      sampleType: 'Swabs',
      tooltip: 'Collect the specimen with the swab. Aseptically unscrew and remove the cap from the transport tube. Insert the swab into the transport tube and break the swab shaft at the indicated breakpoint and screw the cap on tightly.',
      volume: '2 tubes/sample, 1 swap/tube',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Saliva',
      tooltip: 'As per the kit manufacture Guideline',
      volume: '1 mL',
      conditions: 'Dry ice'
    },
    {
      sampleType: 'Bodily Fluids (gDNA)',
      tooltip: 'As per the kit manufacture Guideline',
      volume: '500 µL',
      conditions: '4 Degree (Cool Packs)'
    },
    {
      sampleType: 'Bodily Fluids (cell free DNA)',
      tooltip: 'As per the kit manufacture Guideline',
      volume: '500-10,000 µL',
      conditions: 'Dry ice'
    }
  ];

  const TooltipIcon = ({ tooltip }) => {
    if (!tooltip) return null;
    
    return (
      <div className="group relative inline-block ml-2">
        <span className="inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-teal-600 border border-teal-600 rounded-full cursor-help">
          i
        </span>
        <div className="invisible group-hover:visible absolute z-10 w-80 p-3 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-full top-0 ml-2">
          {tooltip}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Shipping Temperature and Condition</h3>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Before sending your samples, please ensure the shipping conditions, storage
          temperature and requirements based on sample type:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-teal-50">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-teal-700">
                  Sample Type
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-teal-700">
                  Volume/Conc. Required
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-teal-700">
                  Shipping Conditions
                </th>
              </tr>
            </thead>
            <tbody>
              {shippingData.map((row, index) => (
                <tr key={index} className={index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 px-3 py-2 align-top">
                    <div className="flex items-start">
                      <span>{row.sampleType}</span>
                      <TooltipIcon tooltip={row.tooltip} />
                    </div>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 align-top">
                    {row.volume}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 align-top">
                    {row.conditions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShippingTemperatureTable;