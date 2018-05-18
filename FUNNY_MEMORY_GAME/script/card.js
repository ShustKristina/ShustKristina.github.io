function Card(className, backCard, faceCard) {
    var self = this;
    self.className = className;
    self.backCard = backCard;
    self.faceCard = faceCard;

    self.getWrapperCard = function () {
        var wrapperCard = document.createElement("div");
        wrapperCard.className = "wrapper_card";
       
        var back = document.createElement("span");
        back.className = "back_card";
        back.style.background = "url(images/sprite_back2.svg#" + self.backCard + ") no-repeat";
        back.style.backgroundSize = "cover";

        var face = document.createElement("span");
        face.className = "face_card " + self.className + "";
        face.style.background = "url(images/" + self.backCard + "/" + self.faceCard + ".png) no-repeat";
        face.style.backgroundSize = "contain";
        wrapperCard.appendChild(back);
        wrapperCard.appendChild(face);
        return wrapperCard;    
    };
}