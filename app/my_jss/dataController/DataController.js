function DataController() {
  this.data = [];
  this.URL_LOCATION = '';
  this.SAVE_NAME = '';
}

// return data as array
DataController.prototype.returnData = function returnData() {
  this.data = JSON.parse(this.URL_LOCATION);
  this.updateData(this.SAVE_NAME);
  return this.data;
};
// set url location of instance of data controller

DataController.prototype.setUrlLocation = function setUrlLocation(url) {
  this.URL_LOCATION = url;
};
// set name save of instance of data controller

DataController.prototype.setSaveName = function setSaveName(name) {
  this.SAVE_NAME = name;
};


// save data as object to this.data array;
DataController.prototype.saveData = function saveData(data) {
  this.data.push(data);
  this.updateData(this.SAVE_NAME);
};

DataController.prototype.removeData = function removeData(data) {
  const indexOfData = this.data.indexOf(data);
  this.data = this.data.splice(indexOfData, 1);
};

DataController.prototype.updateData = function(name) {

   localStorage.setItem(name, this.data);

};


//// FUNCTION TO CHECK LOCAL STORAGE

function localStorageExistance(){
  if(localStorage.getItem("users"))
  {
    users = localStorage.getItem("users");
  }
  else {
    users = [];
  }
}
