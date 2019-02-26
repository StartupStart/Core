import {mkVector, fallbackValue} from "src/Tools";
import Datastore from "nedb";

export default class DBModel {
	constructor(){
		this.data = {}
	}
	save(){
		var data = this.data;

		var id = fallbackValue(null, data, "_id");
		if(id === null){
			// insert
			var promise = new Promise((resolve, reject) => {
				var db = new Datastore("" + this.getClassName() + ".db");
				db.loadDatabase();

				db.insert(data, (err, newDOC)=>{
					var toReturn = {};
					if(err){
						toReturn.error = true;
						toReturn.data = err;
					} else {
						toReturn.error = false;
						toReturn.data = newDOC;
					}
					this.data = newDOC;
					resolve(toReturn);
				});
			});
			return promise;
		} else {
			// update
			var promise = new Promise((resolve, reject) => {
				var db = new Datastore("" + this.getClassName() + ".db");
				db.loadDatabase();
				console.log(data);
				var clonedData = JSON.parse(JSON.stringify(data));
				db.update({"_id":id}, clonedData, (err, newDOC)=>{
					var toReturn = {};
					if(err){
						toReturn.error = true;
						toReturn.data = err;
					} else {
						toReturn.error = false;
						toReturn.data = newDOC;
					}
					resolve(toReturn);
				});
			});
			return promise;
		}
	}

	setData(fieldName, value){
		this.data[fieldName] = value;
	}

	getData(fieldName){
		return fallbackValue(null, this, "data", fieldName);
	}

	getClassName(){
		return this.constructor.name;
	}

	static find(filter = {}){
		var promise = new Promise((resolve, reject) => {
			var db = new Datastore("" + this.name + ".db");
			db.loadDatabase();

			db.find(filter, (err, docs)=>{
				var toReturn = {};
				if(err){
					toReturn.error = true;
					toReturn.data = err;
				} else {
					toReturn.error = false;
					toReturn.data = docs;
				}
				resolve(toReturn);
			});
		});
		return promise;
	}
	static findOne(filter = {}){
		var promise = new Promise((resolve, reject) => {
			var db = new Datastore("" + this.name + ".db");
			db.loadDatabase();

			db.findOne(filter, (err, doc)=>{
				var toReturn = {};
				if(err){
					toReturn.error = true;
					toReturn.data = err;
				} else {
					toReturn.error = false;
					toReturn.data = doc;
				}
				resolve(toReturn);
			});
		});
		return promise;
	}
}
