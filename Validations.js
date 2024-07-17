db.createCollection("nonfiction",{
    validator:{
        $jsonSchema:{
            required:['name','price'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'Enter String'
                },
                price:{
                    bsonType:'number',
                    description:'Enter number'
                }
            }
        }
    },
    validationAction:'error'
})

db.runCommand({
    collMod:'nonfiction',
    validator:{
        $jsonSchema:{
            required:['name','price','Author'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'Enter String'
                },
                price:{
                    bsonType:'number',
                    description:'Enter number'
                },
                Author:{
                    bsonType:'array',
                    description:'Enter Array',
                    items:{
                        bsonType:'object',
                        required:['name','email'],
                        properties:{
                            name:{
                                bsonType:'string'
                            },
                            email:{
                                bsonType:'string'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction:'error'
})