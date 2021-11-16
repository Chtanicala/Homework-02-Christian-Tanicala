let header = document.querySelector("#header-swap")
let paragraph = document.querySelector("#paragraph-swap")
let aboutMeEl = document.getElementById("AboutMe")
let myWorkEl = document.getElementById("MyWork")
let contactEl = document.getElementById("Contact")

aboutMeEl.addEventListener("click", aboutReplace)
myWorkEl.addEventListener("click", workReplace)
contactEl.addEventListener("click", contactReplace)

function aboutReplace() {
    $(".modifiedText").remove();
    $(`<div class="text-white text-center mb-3 modifiedText">
    <h1>About Me</h1>
    <img src="assets/pictures/Me.jpg" id ="ProfilePic">
    <p id="bioSize">Christian Tanicala is a recent graduate of the Ohio State University's Fisher College of Business, graduating with a Bachelor's degree in Business Science of Business Administration, and specializing in Logistics Management. Although Christian has specialized in Logistics Management, Christian has started his career in the financial securities industry. He currently works for Morgan Stanley in Columbus, Ohio in the Wealth Management department as a Workplace Solutions Group Service Representative.</p>
</div>`).appendTo(
    ".stableSection")
}

function workReplace() {
    $(".modifiedText").remove();
    $(
    `<div class="text-white text-center mb-3 modifiedText">
        <h1>Projects</h1>
        <div class = "row justify-content-center">
            <ul class="row">
                <li class="col">
                    JCPGMarketWatch
                </li>
                <li class="col">
                    <a href="https://jcgasper.github.io/JCPGMarketWatch/stockticker.html">Website</a>
                </li>
                <li class="col">
                    <a href="https://github.com/jcgasper/JCPGMarketWatch">Repository</a>
                </li>
            </ul>
            <figure class="col">
                    <a href="https://jcgasper.github.io/JCPGMarketWatch/stockticker.html">
                        <img src="assets/pictures/JCPG.PNG" class="border">
                        </a>
            </figure>
            <ul class="row">
                <li class="col">
                    Take a break
                </li>
                <li class="col">
                    <a href="https://enigmatic-hamlet-26860.herokuapp.com/">Website</a>
                </li>
                <li class="col">
                    <a href="https://github.com/Chtanicala/Take-a-Break">Repository</a>
                </li>
            </ul>
            <figure class="col">
                    <a href="https://chtanicala.github.io/Password-Generator-Christian-Tanicala-/Develop/index.html" class="border">
                        <img src="assets/pictures/take-break.png" class="border">
                    </a>
            </figure>
        </div>
    </div>`).appendTo(".stableSection")
}

function contactReplace() {
    $(".modifiedText").remove();
    $(
    `<div class="text-white text-center mb-3 modifiedText">
        <h1>Contact</h1>
        <ul id = "Contact-List" class ="row">
            <li class="col">
                <a href="https://github.com/Chtanicala"> GitHub</a>
            </li>
            <li class="col">
                <a href="mailto:christian.tanicala@gmail.com"> Email</a>
            </li>
            <li class="col">
                <a href="https://www.linkedin.com/in/christian-t-94a24411a/"> LinkedIn</a>
            </li>
            <li class="col">
                <a href="Christian-Tanicala-AU21-Coding(1).pdf" download>Resume</a>
            </li>
        </ul>
    </div>`).appendTo(".stableSection")
}