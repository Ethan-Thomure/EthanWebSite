///////////////     Links

navigation_links = document.getElementsByClassName("navigation");
for (let i = 0; i < navigation_links.length; i++) {
    navigation_links[i].onmouseover = linkMouseOver;
    navigation_links[i].onmouseleave = navigationDefault;
}

example_links = document.getElementsByClassName("example");
for (let i = 0; i < navigation_links.length; i++) {
    example_links[i].onmouseover = linkMouseOver;
    example_links[i].onmouseleave = exampleDefault;
}

function linkMouseOver() {
    this.style.color = "orange";
}

function navigationDefault() {
    this.style.color = "lightblue";
}

function exampleDefault() {
    this.style.color = "green";
}

//////////////      Cookies

