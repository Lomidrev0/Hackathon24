import React, { useState } from "react";

export function setLoginBg() {
    function updateBackground() {
        document.body.style.backgroundImage = "url('bg6.png')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "100%";
        document.body.style.backgroundRepeat = "no-repeat";

        if (window.matchMedia("(max-width: 768px)").matches) {
            document.body.style.backgroundSize = "200% 100%";
        }
    }

    if (window.matchMedia("(max-width: 990px)").matches) {
        document.body.style.backgroundSize = "200% 100%";
    }
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
}

export function setAppBg() {
    document.body.style.backgroundImage = "url('background.png')";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundPosition = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
}