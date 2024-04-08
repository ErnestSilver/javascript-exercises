const getTheTitles = function (obj) {
  return obj.map(getTitle);
  function getTitle(item) {
    return item.title;
  }
};

// Do not edit below this line
module.exports = getTheTitles;
