/* section code */
    var currentSection = 0;
    var sections = document.getElementsByClassName("section");
    var count = 0;
    var i;
    function pause() {
        count++;
    }
    function animation(section, mSeconds, direction, distance) {
        $(section).animate({
            marginLeft: direction + distance
        }, mSeconds);
    }
    function switchPage(index) {
        while(index !== currentSection) {
            if(index > currentSection) { //move to the right
                var distance = (100*Math.abs(index-currentSection)).toString() +"%";
                for(i=0; i<sections.length; i++) {
                    animation(sections[i], 500, "-=", distance);
                }
                setTimeout(pause(), 510);
                currentSection=index;
            }

            if(index < currentSection) { //move to the left
                var distance = (100*Math.abs(index-currentSection)).toString() +"%";
                for(i=0; i<sections.length; i++) {
                    animation(sections[i], 500, "+=", distance);
                }
                setTimeout(pause(), 501);
                currentSection=index;
            }
        }
    }
/*
  class sectionAnimation {
        constructor(sectionClass, animationTime, firstSection) { //expects a string, integer, and integer respectively
            this.class = sectionClass;
            this.animationTime = animationTime;
            this.sections = document.getElementsByClassName(sectionClass);
            this.count = 0;
            this.currentSection = firstSection;
        }

        pause() {
            count++;
        }

        animation(section, mSeconds, direction) {
            $(section).animate({
                marginLeft: direction + "100%"
            }, mSeconds);
        }

        switchPage(index) {
            var i;
            while(index !== this.currentSection) {
                if(index > this.currentSection) { //move to the right
                    for(i=0; i<this.sections.length; i++) {
                        this.animation(this.sections[i], 500, "-=");
                    }
                    setTimeout(this.pause(), 510);
                    this.currentSection++;
                }

                if(index < this.currentSection) { //move to the left
                    for(i=0; i<this.sections.length; i++) {
                        this.animation(this.sections[i], 500, "+=");
                    }
                    setTimeout(pause(), 501);
                    this.currentSection--;
                }
            }
        }
    }

    var resumeSections = sectionAnimation("section", 500, 0); */