'use strict';

function buildErrors(serverErrors) {
  if (!serverErrors) {
    console.log('Unidentified error');
    return;
  } else {
    var errors = {};
    serverErrors.errors.forEach(function (error) {
      errors[errorKey(error.source)] = error.title;
    });
    return errors;
  }
}

function errorKey(source) {
  return source.pointer.split('/').pop();
}

module.exports = {
  name: 'errors',
  error: function error(payload) {
    return buildErrors(payload.response.data);
  }
};