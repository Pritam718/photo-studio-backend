const express=require("express");
const search_route=express();
const searchComponent=require("../controllers/searchComponent");

search_route.get("/search/:key",searchComponent.getSearch);

module.exports=search_route