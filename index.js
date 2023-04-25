const express = require("express")
const fs = require("fs")
//const path = require("path");

//path
//const dirPath = path.join(__dirName,"timestamps");
//console.log("dirPath", dirPath)

const app = express()

const data = [
    {
        id:"1",
        numberOfSeats: 80,
        price: 3000,
        ifBooked:"true",
        amenities: ["chairs", " AC", "Discolights"],
        CustomerName: "Albert",
        date: "03-mar-2023",
        startTime: "05-mar-2023 at 2PM",
        endTime: "06-mar-2023 at 10AM",
        RoomName:"Duplex",
        RoomId: 308,
    },

    {
        id:"2",
        numberOfSeats: 80,
        price: 3000,
        ifBooked:"false",
        amenities: ["chairs", " AC", "Discolights"],
        CustomerName: "Sunitha",
        date: "",
        startTime: "",
        endTime: "",
        RoomName:"",
        RoomId: 310,
    },
]
//get hall details

app.get("/hall/details",(req,res)=>{
    if(req.query){
        const{ifBooked} = req.query;
        console.log(ifBooked)
        let filterHall = data;
        if(ifBooked){
       filterHall = filterHall.filter((halls)=>halls.ifBooked ===ifBooked)     

        }
        res.send(filterHall)
        
    } else{
        req.send(data)
    }
})

//get hall details
app.get("/hall/details/id",(req, res)=>{
    const {id} = req.params;
    console.log(id)
    const{ifBooked} = req.query;
    console.log(ifBooked)
    let filterHall = data;
    if(ifBooked){
        filterHall = filterHall.filter((hall)=>halls.ifBooked === ifBooked)
    }
    res.send(filterHall)
    const specificHall =data.find(hall=>hall.id ===id);
    res.send(specificHall)
})







app.listen(9000, ()=>console.log(`server started in localhost:9000`))