var imgs_list = []
var position = "left"
var size = 300
var border = 0
var time_stay = 1
var time_out = 1
///////////////////////////////////////
let json_data;
async function go(){
const getting_data = fetch("./core/base_api.json")
    .then(results =>results.json())
    .then(function (data){
    imgs_list = data.names
    position = data.position
    size = data.size
    border = data.border
    time_stay = data.stay
    time_out = data.out
    big_run()
    });}

go()