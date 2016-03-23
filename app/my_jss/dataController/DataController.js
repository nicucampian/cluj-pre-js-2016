function DataController() {
  this.data = [];
}
// return data as array
DataController.prototype.returnData = function (location,name) {

  this.data = parse(location);
  this.updateData(name);
  return this.data;
}
// save data as object to this.data array;
DataController.prototype.saveData = function (data,name) {

  this.data.push(data);
  this.updateData(name);
  /// observer to push data into location

}

DataController.prototype.removeData = function(data) {

  var indexOfData = this.data.indexOf(data)
  this.data = this.data.splice(index,1);
    /// observer to push data into location
}

DataController.prototype.updateData = function(name) {

    if(localStorage.getItem(name))
    {
        localStorage.setItem(name,this.data)
    }
}
