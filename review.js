db.employee.find({age:{$gt:60}})
db.employee.updateOne({id:123},{$set:{place:'Kochi'}})