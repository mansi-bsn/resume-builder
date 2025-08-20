
document.addEventListener('DOMContentLoaded', function() {
    const addMoreBtn = document.getElementById('addMoreBtn');
    if (addMoreBtn) {
        addMoreBtn.addEventListener('click', addProj);
    }
});

function addProj() {
    let table = document.querySelector(".main");
    
    const newProjectHTML = `
        <tr>
            <td><label for="">Project title: </label></td>
            <td><input type="text" name="projTitle" placeholder="Enter project title..."></td>
            <td><textarea name="projDesc" placeholder="Enter project description..." style="width: 300px;"></textarea></td>
            <td><button type="button" class="remove-btn" onclick="removeProject(this)">Remove</button></td>
        </tr>
    `;
    const addMoreBtn = document.getElementById('addMoreBtn');
    const addMoreRow = addMoreBtn.closest('tr');
    addMoreRow.insertAdjacentHTML('beforebegin', newProjectHTML);
}

function removeProject(button) {
    button.closest('tr').remove();
}


function resumeBuilder(event){
    event.preventDefault();

    if (!$("#myForm").valid()) {
        alert("Please fill all required fields!");
        return;
    }
    
    let name = document.getElementById("name").value.toUpperCase();
    let jobRole = document.getElementById("jobRole").value.toUpperCase();
    
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    
    let location = document.getElementById("location").value;
    let lnLink = document.getElementById("lnLink").value;
    
    let gitLink = document.getElementById("gitLink").value;
    
    let aboutInfo = document.getElementById("aboutInfo").value;
    
    let skills = document.getElementById("skills").value;
    let skillsArray = skills.split(",").map(s => s.trim()).filter(s => s.length > 0);
    let skillsHTML = skillsArray.map(skill => `<span class="skill">${skill}</span>`).join(" ");
    
    let lang = document.getElementById("lang").value;
    let langArray = lang.split(",").map(l => l.trim()).filter(l => l.length > 0);
    let langHTML = langArray.map(lang1 => `<div>${lang1}</div>`).join(" ");

    let degree = document.getElementById("degree").value;
    
    let uni = document.getElementById("uni").value;
    
    let board = document.getElementById("board").value;
    let school = document.getElementById("school").value;
    let percent = document.getElementById("percent").value;
    let schoolCity = document.getElementById("sclCity").value;
    let certi = document.getElementById("certificate").value;
    
    let certiInsti = document.getElementById("certiInsti").value;
    
    let projectTitles = document.querySelectorAll("input[name='projTitle']");
    let projectDescs = document.querySelectorAll("textarea[name='projDesc']");
    
    let projectsHTML = "";
    projectTitles.forEach((title, i) => {
        let desc = projectDescs[i].value;
        projectsHTML += `
            <div class="mb-10">
                <b>${title.value}</b>
                <p>${desc}</p>
            </div>`;
    });
    let resume1 = document.getElementById("resume");
    resume1.innerHTML += `<div class="row resumeClass">
    <div class="w-12">
    <div class="w-12 name-role text-center">
    <h1>${name}</h1>
    <h2 class="role">${jobRole}</h2>
    </div>
    <hr>
    <div class="w-12 d-flex h-100">
    <div class="w-6 h-100 br-right">
    <!-- contact  -->
    <div class="contact">
    <h2>
    Contact
    </h2>
    <p><span>&#9742;&nbsp;</span><span>${phone}</span></p>
    <p><span>&#9993;&nbsp;</span><span>${email}</span></p>
    <p><span>&#128205;&nbsp;</span><span>${location}</span></p>
    <p><span>&#128279;&nbsp;</span><span>${lnLink}</span></p>
    <p><span>&#127760;&nbsp;</span><span>${gitLink}</span></p>
    </div>
    <!-- profile  -->
    <div class="profile">
    <h2>
    Profile
    </h2>
    <p>${aboutInfo}</p>
    </div>
    <!-- skills  -->
    <div class="skills">
    <div style="margin-bottom: 25px;">
    <h2>
    Skills
    </h2>
    </div>
    <div>
    ${skillsHTML}
    </div>
    </div>
    <!-- Language  -->
    <div class="language">
    <h2>
    Language
    </h2>
    <div>
        ${langHTML}
    </div>
    </div>
    </div>
    <div class="w-6 h-100">
    <!-- Education  -->
    <div class="education">
    <h2>
    Education
    </h2>
    <div class="mb-10">
    <b>${degree}</b>
    <p>${uni}</p>
    </div>
    <div class="mb-10">
    <b>${board}</b>
    <p>${school}</p>
    <p>${percent} | ${schoolCity} </p>
    </div>
    </div>
    <!-- Certificate  -->
    <div class="certificate">
    <h2>
    Certificate
    </h2>
    <div>
    <b>${certi}</b>
    <p>${certiInsti}</p>
    </div>
    </div>
    <!-- Work Experience  -->
    <div class="experience">
    <h2>
    Work Experience
    </h2>
    ${projectsHTML}
    </div>
    </div>
    </div>
    </div>
    </div>`;
    
}

// validation

// let myForm = $("#myForm");

$("#myForm").validate({
    rules: {
        name: {
            required : true
        },
        jobRole: {
            required : true
        },
        phone: {
            required : true
        },
        email: {
            required : true,
            email : true
        },
        location: {
            required : true
        },
        lnLink: {
            required : true
        },
        gitLink: {
            required : true
        },
        about: {
            required : true
        },
        skills: {
            required : true
        },
        language: {
            required : true
        },
        degree: {
            required : true
        },
        university: {
            required : true
        },
        board: {
            required : true
        },
        sclName: {
            required : true
        },
        percent: {
            required : true
        },
        sclCity: {
            required : true
        },
        certificate: {
            required : true
        },
        certiInsti: {
            required : true
        },
        "projTitle[]": {
            required : true
        },
        "projDesc[]": {
            required : true
        }
    }
})
