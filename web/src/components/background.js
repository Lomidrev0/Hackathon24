import React, { useState } from "react";

export function setBackground() {
    document.body.style.backgroundImage = "url('background.png')";
    document.body.style.backgroundSize = "300% 100%";
    document.body.style.backgroundPosition = "60%";
    document.body.style.backgroundRepeat = "no-repeat";
}