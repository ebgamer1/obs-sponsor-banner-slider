divs_cont = document.getElementById("imgs");
var img_names = []


////////////////////////////////////////////
const fileSelector = document.getElementById('file_picker');
fileSelector.addEventListener('change', (event) => {
  var file = file_picker.files;
  var file_nums = file.length
  for(let i = 0;i < file_nums;i++){
    add_new(file_picker.files[i].name)
    img_names.push(file_picker.files[i].name)
  }
});

function mini_texter(T){
  if(T.length >= 11){
  var splited = T.split('');
  
  const first_words = splited[0]+splited[1]+splited[2]+splited[3]+splited[4]+splited[5]
  const last_words = splited[splited.length - 5]+splited[splited.length - 4]+splited[splited.length - 3]+splited[splited.length - 2]+splited[splited.length - 1]
  
  const final_word = first_words+"...\n"+last_words

  return(final_word);
  }
  else{
    return(T);
  }
}

function add_new(f_name){
  const newdiv = document.createElement("div");
  //console.log(f_name);
  newdiv.classList.add("imgs_view");
  divs_cont.appendChild(newdiv);
  //const div_name = document.createElement("p");
  //newdiv.appendChild(div_name);
  newdiv.innerHTML = mini_texter(f_name);
}

function values(){
  data.position = document.getElementById("set_pos").value
  data.size = document.getElementById("size").value
  data.border = document.getElementById("border").value
  data.stay = document.getElementById("stay_s").value
  data.out = document.getElementById("out_s").value
}

function reset(){
  window.location.reload();
}

function save(){
  values()
if(data.names != [] && data.size != "" && data.border != "" && data.stay != "" && data.out != ""){
  var jsonse = JSON.stringify(data);
  var blob = new Blob([jsonse], {type: "application/json"});
  var href = URL.createObjectURL(blob);

  const a = Object.assign(document.createElement("a"), {
  href,
  style:"display:none",
  download:"base_api.json",});

  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(href);
  a.remove();
}
else{
  alert("fill the setting")
}
}
//obj
var data = {
  names:img_names,
  position:undefined,
  size:undefined,
  border:undefined,
  stay:undefined,
  out:undefined
}