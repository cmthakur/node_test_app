module.exports = function(Category) {
  Category.disableRemoteMethod('create', true);
  Category.disableRemoteMethod('upsert', true);
  Category.disableRemoteMethod('deleteById', true);
  Category.disableRemoteMethod("updateAll", true);
  Category.disableRemoteMethod("updateAttributes", false);
  Category.disableRemoteMethod('createChangeStream', true);
};
