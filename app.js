import express from "express";
const app = express();
import employees from "./db/employees.js";

app.route("/").get((req, res)=>{
    res.send("Hello employees!")
})

app.route("/employees").get((req, res)=>{
    res.send(employees)
})

app.route("/employees/random").get((req,res)=>{
    const random = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[random]
    res.send(randomEmployee)
})


app.route("/employees/:id").get((req,res)=>{
    const id = Number(req.params.id)
    const employee = employees.find(emp => emp.id === id)
    if(!employee){
        return res.status(404).send("There is no employee with that id");
    }
    res.send(employee)
})


export default app