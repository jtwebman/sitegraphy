'use strict';

const schemaTypes = require('./schema-types');

function validType(type) {
  return [];
}

function buildTypeDirectory(types) {
  return types.reduce(
    (returnTypes, key) => {
      const currentType = types[key];
      const errors = validType(currentType);
      if (errors.length >= 1) {
        return (returnTypes.error = returnTypes.error.concat(errors));
      }
      switch (currentType.type) {
        case schemaTypes.OBJECT:
        case schemaTypes.ENUM:
        case schemaTypes.UNION:
          returnTypes.object[currentType.name] = currentType;
          break;
        case schemaTypes.EXTENDER:
          returnTypes.extenders[currentType.name] = currentType;
          break;
      }
      return returnType;
    },
    {
      objects: {},
      extenders: {},
      errors: []
    }
  );
}

function expandObjects(type, typeDirectory) {
  if
}

function merge(types) {
  let typeDirectory = null;
  if (Array.isArray(types)) {
    typeDirectory = buildTypeDirectory(types);
  } else {
    typeDirectory = buildTypeDirectory(Object.keys(types).map(key => types[key]));
  }
  typeDirectory.objects = Object.keys(typeDirectory.objects).map(name =>
    expandObjects(typeDirectory.objects[name], typeDirectory)
  );
}
