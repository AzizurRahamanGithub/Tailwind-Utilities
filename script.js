




// according text

document.querySelectorAll(".expander").forEach((expand) => {
    const icon = expand.querySelector("#arowICON");
    const according = expand.querySelector("#according");

    expand.addEventListener("click", () => {

        if (according.style.height === "0px" || according.style.height === "") {
            according.style.height = according.scrollHeight + "px";
            expand.style.backgroundColor = "#f9fafb";
            icon.classList.add("rotate-180");
        } else {
            according.style.height = "0px";
            expand.style.backgroundColor = "";
            icon.classList.remove("rotate-180");
        }
    });
});


// Breadcrumbs - Collapsed

var threeDot_Collapsed = document.getElementById("threeDOT_Breadcrumbs");
var Breadcrumbs= document.getElementById("display_Breadcrumbs");

threeDot_Collapsed.addEventListener("click",()=>{

            Breadcrumbs.style.display="flex";
            threeDot_Collapsed.style.display="none";

})


// checkbox

const icon= document.getElementById("unic");
    icon.indeterminate = true;
    icon.style.backgroundColor="blue";
            icon.style.border="blue";


// inputs

document.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("dynamic_input");
    const exText = document.getElementById("dynamic_inputText");
    const erText = document.getElementById("dynamic_helperText");
    const user = document.getElementById("user_icon");
    const eye = document.getElementById("eye_icon");

    const checkInputValue = () => {
        if (input.value === "") {
            exText.innerHTML = "Default";
        } else {
            exText.innerHTML = "Text Filed";
        }

        if (input.value === "Azizur Rahaman") {
            erText.innerHTML = "Excellent!";
            erText.classList.add("text-green-600");
            erText.classList.remove("text-red-600");
        } else {
            erText.innerHTML = "Error detected";
            erText.classList.add("text-red-600");
            erText.classList.remove("text-green-600");
            input.classList.add("ring-red-600");
            input.classList.remove("ring-blue-600 ");
        }
    };

    input.addEventListener("focus", () => {
        user.classList.add("text-blue-600");
        eye.classList.add("text-blue-600");
        user.classList.remove("text-slate-500");
        eye.classList.remove("text-slate-500");

        exText.innerHTML = "Focused";
    });

    input.addEventListener("blur", () => {
        user.classList.add("text-slate-500");
        eye.classList.add("text-slate-500");
        user.classList.remove("text-blue-600");
        eye.classList.remove("text-blue-600");
        
       
    });

    input.addEventListener("input", () => {
        checkInputValue();
    });

});



// Segmented control

document.addEventListener("DOMContentLoaded",(event)=>{
     const Segment1= document.getElementById("segment1");
     const Segment2= document.getElementById("segment2");
     const Segment3= document.getElementById("segment3");
     const Segment4= document.getElementById("segment4");

     const segments= [Segment1,Segment2,Segment3];

     segments.forEach(segment=>{
        segment.addEventListener("click",()=>{
            segments.forEach(element => {
                element.classList.remove("segmented_active");
                        element.classList.add("sigment_hover");
                    });
                    segment.classList.add("segmented_active");
                    segment.classList.remove("sigment_hover");
       
        })
     })

})


// for tabs

document.addEventListener("DOMContentLoaded", () => {
    const tabs = {
        tab1: document.getElementById("tab1"),
        tab2: document.getElementById("tab2"),
        tab3: document.getElementById("tab3"),
        tab4: document.getElementById("tab4"),
        tab5: document.getElementById("tab5"),
    };

    const contents = {
        content1: document.getElementById("tabContent1"),
        content2: document.getElementById("tabContent2"),
        content3: document.getElementById("tabContent3"),
        content4: document.getElementById("tabContent4"),
        content5: document.getElementById("tabContent5"),
    };

    const deactivateAllTabs = () => {
        Object.values(tabs).forEach(tab => {
            tab.classList.remove("btnTab_active");
            tab.classList.add("border-b-2", "border-transparent");

            const icon = tab.querySelector("i");
            const text = tab.querySelector("span");
            const badge = tab.querySelector("div");

            icon.classList.remove("text-blue-700");
            icon.classList.add("text-slate-500");

            text.classList.remove("text-blue-700");
            text.classList.add("text-slate-600");

            badge.classList.remove("bg-blue-700", "text-white", "border-blue-700");
            badge.classList.add("bg-blue-50", "border-blue-400", "text-blue-700");
        });

        Object.values(contents).forEach(content => {
            content.classList.add("hidden");
        });
    };

    Object.entries(tabs).forEach(([key, tab], index) => {
        tab.addEventListener("click", () => {
            deactivateAllTabs();
            tab.classList.add("btnTab_active");
            tab.classList.remove("border-transparent");
            tab.classList.add("border-blue-700");

            const icon = tab.querySelector("i");
            const text = tab.querySelector("span");
            const badge = tab.querySelector("div");

            icon.classList.remove("text-slate-500");
            icon.classList.add("text-blue-700");

            text.classList.add("text-blue-700");
            text.classList.remove("text-slate-600");

            badge.classList.add("bg-blue-700", "text-white", "border-blue-700");
            badge.classList.remove("bg-blue-50", "border-blue-400", "text-blue-700");

            contents[`content${index + 1}`].classList.remove("hidden");
        });
    });
});



