function addScript(src) {
    let _ = document.createElement("script");
    _.type = "text/javascript";
    _.src = src;
    document.getElementsByTagName("head")[0].appendChild(_);
}

///--- Engine Includes ---\\\

//-- Maths --\\
addScript("Library/Maths/Vector2.js");

//-- Graphics --\\
addScript("Library/Graphics/Sprite.js");
