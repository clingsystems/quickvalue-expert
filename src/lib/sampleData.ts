export const sampleData = `name;capacity (kWh);manufacturer;sku
E-Power Pro;75;EnerGen;BAT-001
VoltMax 2000;80;Voltix;SKU-5124
EcoCharge S;60;EcoMotion;SKU-7900
MegaVolt Plus;90;MegaCells;SKU-9034
GreenCell X1;85;GreenPower Co.;BAT-002
PowerHub Z;70;PowerHub Inc.;SKU-6908
ElectraPrime;95;Electra;SKU-4802
ChargePro Ultra;65;ChargeRight;SKU-6324
EcoLite;55;EcoSolutions;SKU-6869
VoltEdge;100;VoltTech;SKU-5309`;

export const downloadSampleCSV = () => {
  const blob = new Blob([sampleData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'battery-inventory-sample.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};