let devTitles    = document.querySelectorAll ( ".infoTitle"                   ) ;
var comPara      = document.querySelector    ( ".ourCommitteesDescription"    ) ;
let tracks       = document.querySelectorAll ( ".track"                       ) ;
let services     = document.querySelectorAll ( ".services"                    ) ;
let descriptions = document.querySelectorAll ( ".dev-describtion"             ) ;
let nonTechIcon = document.querySelectorAll ( ".non-tech-icon"             ) ;
let nonTechTitle = document.querySelectorAll ( ".non-tech-title"             ) ;
let navItems = document.querySelectorAll(".nav-item");
let imagesGallery = document.querySelectorAll(".imagesGallery");
let dropdownItem = document.querySelectorAll(".dropdown-item");
let mains = document.querySelectorAll("main")
let imagesContainer=document.querySelector(".imagesContainer");
let myImage = document.querySelectorAll(".image");
console.log(document.querySelectorAll(".image"));
// console.log(window.ourCommittes);
// function openOurCommittees (){
//     mains.forEach((m)=>{
//         m.style.opacity=0;
//         setTimeout(function(){
//             m.style.display="none";
//         },700)
//     })
//     ourCommittes.style.display="block";
//     setTimeout(()=>{
//         ourCommittes.style.opacity="1";
//         console.log("ou-committes Section has been Appeared");
//     },100)
// }

function getAll(){
    imagesContainer.children[0].style.cssText=`transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%;`;
    imagesContainer.style.cssText=`transform: translateX(0px) !important;`;
    imagesContainer.children[1].style.cssText=`transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
    imagesContainer.children[2].style.cssText=`transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
    console.log("All is Here");
}
function getEvents(){
    imagesContainer.children[0].style.cssText=`transform: skew(-10deg, -10deg);filter: grayscale(1);opacity: 0%;`;
    imagesContainer.style.cssText=`transform: translateX(calc(-100%/3)) !important;`;
    console.log("Events is Here");
    imagesContainer.children[1].style.cssText=`transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%;`;
    imagesContainer.children[2].style.cssText=`transform: skew(10deg, 10deg);filter: grayscale(1);opacity: 0%;`;
}
function getSessions(){
    imagesContainer.children[2].style.cssText=`transform: skew(0deg, 0deg);filter: grayscale(0);opacity: 100%;`;
    imagesContainer.children[1].style.cssText=`transform: skew(-10deg, -10deg);filter: grayscale(1);opacity: 0%;`;
    imagesContainer.children[0].style.cssText=`transform: skew(-10deg, -10deg);filter: grayscale(1);opacity: 0%;`;
    imagesContainer.style.cssText=`transform: translateX(calc(-200%/3)) !important;`;
    console.log("Sessions is Here");
}
navItems.forEach((item)=>{
    item.onclick=function(){
        navItems.forEach((i)=>{
            i.classList.remove("active");

        })
        if(!(item.classList.contains("dropdown"))){
            dropdownItem.forEach((i)=>{
                i.classList.remove("active");
    
            })
        }
        
        item.classList.add("active");
        if(item==navItems[0]){
            mains.forEach((m)=>{
                m.style.opacity=0;
                setTimeout(function(){
                    m.style.display="none";
                },700)
            })
            setTimeout(()=>{
                mains[0].style.display="block";
            },800)
            setTimeout(()=>{
                mains[0].style.opacity="1";
                console.log("ou-committes Section has been Appeared");
                // document.querySelectorAll(
                //     ".main-effect"
                // ).style.cssText = `animation: none;`;
                setTimeout(()=>{
                    document.querySelectorAll(
                        ".main-effect"
                    )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
                },100)
                setTimeout(function adding() {
                    document.querySelectorAll    ( ".ourCommitteesDescription"    )[0]  === null || document.querySelectorAll    ( ".ourCommitteesDescription"    )[0]  === void 0
                    ? void 0
                    : document.querySelectorAll    ( ".ourCommitteesDescription"    )[0] .classList.add("show1");
                }, 2000);
                
            },900)
        }
        else if(item==navItems[1]){
            mains.forEach((m)=>{
                m.style.opacity=0;
                setTimeout(function(){
                    m.style.display="none";
                },700)
            })
            setTimeout(()=>{
                checkNetworkSpeed()
            },750)
            setTimeout(()=>{
                mains[1].style.display="block";
            },800)
            setTimeout(()=>{
                mains[1].style.opacity="1";
                console.log("ou-committes Section has been Appeared");
                // document.querySelectorAll(
                //     ".main-effect"
                // ).style.cssText = `animation: none;`;
                setTimeout(()=>{
                    document.querySelectorAll(
                        ".main-effect"
                    )[1].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
                },100)
                setTimeout(function adding() {
                    document.querySelectorAll    ( ".ourCommitteesDescription"    )[1]  === null || document.querySelectorAll    ( ".ourCommitteesDescription"    )[1]  === void 0
                    ? void 0
                    : document.querySelectorAll    ( ".ourCommitteesDescription"    )[1] .classList.add("show1");
                }, 2000);
                imagesGallery.forEach((item)=>{
                    item.onclick=function(){
                        imagesGallery.forEach((i)=>{
                            i.classList.remove("activate");
                
                        })
                        if (item==imagesGallery[0]){
                            getAll()
                        }
                        else if(item==imagesGallery[1]){
                            getEvents()
                        }
                        else{
                            getSessions()
                        }
                        item.classList.add("activate");}})
            },900)

        }
        else if(item==navItems[2]){
            mains.forEach((m)=>{
                m.style.opacity=0;
                setTimeout(function(){
                    m.style.display="none";
                },700)
            })
            setTimeout(()=>{
                mains[2].style.display="block";
            },800)
            setTimeout(()=>{
                mains[2].style.opacity="1";
                console.log("ou-committes Section has been Appeared");
            },900)
        }
        // to be continue
        console.log(item);
    }
})
// background-color: var(--purple-accent); */
    // /* color: var(--main-bg-nav-color) !important;
dropdownItem.forEach((item)=>{
    item.onclick=()=>{
        dropdownItem.forEach((i)=>{
            i.classList.remove("active");

        })
        item.classList.add("active");
    }
})

function checkNetworkSpeed() {
    if ( navigator.onLine ) {
        setTimeout(() => {
        // Start Splash Screen
            document.getElementById ( "splash" ) . classList . add ( "fade"   ) ;
        setTimeout(() => {
            document.getElementById ( "splash" ) . classList . add ( "hidden" ) ;
            document.body.style.overflow = "hidden auto";
        }, 900);
        // End Splash Screen

        // Start animation Header
        document.querySelectorAll(
            ".main-effect"
        )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
        setTimeout(function adding() {
            document.querySelectorAll    ( ".ourCommitteesDescription"    )[0]  === null || document.querySelectorAll    ( ".ourCommitteesDescription"    )[0]  === void 0
            ? void 0
            : document.querySelectorAll    ( ".ourCommitteesDescription"    )[0] .classList.add("show1");
        }, 2000);
        
        // End animation Header
        setTimeout(
            (window.onscroll = function showing() {
                // document.querySelector(
                //     ".main-effect"
                // )[0].style.cssText = `animation: showing-text 2s, cursor 0.4s step-end alternate;`;
            let totalHeight = (window.innerHeight / 5) * 4;
            devTitles.forEach((title) => {
                let titleTop = title.getBoundingClientRect().top;
                if (titleTop < totalHeight) {
                title.classList.add("show");
                } else {
                title.classList.remove("show");
                }
            });
            myImage.forEach((pic)=>{
                let picTop = pic.getBoundingClientRect().top;
                if (picTop < totalHeight) {
                pic.classList.add("show");
                } else {
                pic.classList.remove("show");
                }
            })
            setTimeout(()=>{
                descriptions.forEach((describe) => {
                    let desTop = describe.getBoundingClientRect().top;
                    if (desTop < totalHeight) {
                    describe.classList.add("show");
                    } else {
                    describe.classList.remove("show");
                    }
                });
            },700)
            setTimeout(()=>{
                services.forEach((service) => {
                    let serTop = service.getBoundingClientRect().top;
                    if (serTop < totalHeight) {
                    service.classList.add("show");
                    } else {
                    service.classList.remove("show");
                    }
                });
            },1000)
            setTimeout(()=>{
                tracks.forEach((tr) => {
                    let trackTop = tr.getBoundingClientRect().top;
                    if (trackTop < totalHeight) {
                    tr.classList.add("show");
                    } else {
                    tr.classList.remove("show");
                    }
                });
            },1000)
            nonTechIcon.forEach((icon) => {
                let iconTop = icon.getBoundingClientRect().top;
                if (iconTop < totalHeight) {
                icon.classList.add("show");
                } else {
                icon.classList.remove("show");
                }
            });
            nonTechTitle.forEach((title) => {
                let titleTop = title.getBoundingClientRect().top;
                if (titleTop < totalHeight) {
                title.classList.add("show");
                } else {
                title.classList.remove("show");
                }
            });
        }),2700);
    }, 2000);
    } else {
        document.getElementById("splash").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}
checkNetworkSpeed();
// if(location.reload()){
//     window.innerHeight=790;
// }
// Function to scroll to the top of the page
function scrollToTop() {
    // Scrolls to the coordinates (0, 0) which is the top-left corner of the page
    window.scrollTo(0, 0);
  }
  
  // Attach the scrollToTop function to the window's 'beforeunload' event
  window.addEventListener('beforeunload', scrollToTop);

//in our Gallery Page to control what to show from any section [All,Events,Sessions]
