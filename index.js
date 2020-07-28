var StaticMode = module.exports = {};

StaticMode.onSetup = function() {
  this.setActionableState();
  return {};
};

StaticMode.toDisplayFeatures = function(state, geojson, display) {
  display(geojson);
};
