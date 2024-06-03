const mongoose = require('mongoose');

const mongoDB = async () => {
    await mongoose.connect('mongodb+srv://gofood:mern123@cluster0.ee9a0dj.mongodb.net/gofoodmern?retryWrites=true&w=majority', { useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log(err);
        else{
            console.log("Database connected Successfully");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err,catData){
                    if(err) console.log(err);
                    else{
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })   
            })
        }
    });
};

module.exports = mongoDB;
