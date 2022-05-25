const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "KepLer Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("February 21, 2030"),
  destination: "KepLer-44 b",
  customer: ["NASA", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
