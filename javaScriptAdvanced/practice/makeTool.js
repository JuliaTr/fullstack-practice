function makeTool(part) {
  return function tool(robot) {
    const copyRobot = { ...robot };

    delete copyRobot[part];

    return copyRobot;
  };
}

const kobi = {
  wheels: 10,
  chipVersion: 11,
  serialNumber: 100
};

const removeWheels = makeTool('wheels');
const removeChip = makeTool('chipVersion');

const robotWithoutWheels = removeWheels(kobi);
console.log(robotWithoutWheels);
// { serialNumber: 100, chipVersion: 11 }

const robotWithoutChip = removeChip(kobi);
console.log(robotWithoutChip);
// { serialNumber: 100, wheels: 10 }

const robotWithoutDetails = removeWheels(robotWithoutChip);
console.log(robotWithoutDetails);
// { serialNumber: 100 }

console.log(kobi);
// kobi === {
//   wheels: 10,
//   chipVersion: 11,
//   serialNumber: 100
// }
