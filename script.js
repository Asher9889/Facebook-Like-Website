const navProfileIcon = document.querySelector(".profileSettingsShow")
const settingDiv = document.querySelector(".profile-setting-div")
const modeBtn = document.querySelector(".night-mode-div")
const body = document.querySelector("body") 


navProfileIcon.addEventListener("click", ()=>{
  settingDiv.classList.toggle("show-profile-settings")
})

// localStorage.setItem("theme", "light")

modeBtn.addEventListener("click", ()=>{
  body.classList.toggle("dark-mode")
  // modeBtn.classList.toggle("dark-mode")
  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark")
  }else{
    localStorage.setItem("theme", "light")
  }
})


if(localStorage.getItem("theme") == "light"){
  body.classList.remove("dark-mode")
  console.log("remove dark mode")
} else if(localStorage.getItem("theme") != "light"){
  body.classList.add("dark-mode")
  console.log("dark mode added")
}else{
  localStorage.setItem("theme", "light")
}

