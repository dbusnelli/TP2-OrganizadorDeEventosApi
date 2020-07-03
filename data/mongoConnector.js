import { default as mongodb } from 'mongodb';
const MongoClient = mongodb.MongoClient

class MongoConnector { 
    constructor() {
        this.url = 'mongodb://localhost:27017'
        this.dbName = 'eventosApi'
        this.client = new MongoClient(this.url, {useNewUrlParser: true})
    }

    async performOperation2(col, mongoOperation) {
        this.client.connect(function(error) {
            if(error != null){
                console.log("Connected successfully to server")
            }
            db = this.client.db(dbName)
            collection = db.getCollection(col)
            mongoOperation(collection)
        });
    }

    async performOperation(col, mongoOperation) {
        const url = 'mongodb://localhost:27017'
        const dbName = 'eventosApi'
        return MongoClient.connect(url, {useNewUrlParser: true}, function(error, client) {
            if(error == null){
                console.log("Connected successfully to server")
            }
            const db = client.db(dbName)
            const collection = db.collection(col)
            return mongoOperation(collection)
        })
    }
}
export {
    MongoConnector
}
