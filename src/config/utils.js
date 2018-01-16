module.exports.getToken = function (fullToken) {
    console.log('we are in the getToken util method !')
      var parted = fullToken.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    
  };

  module.exports.Secret  ='IAmAwesome';