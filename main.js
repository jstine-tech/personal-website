/* section code */
 /*   var currentSection = 0;
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
    } */

 /*Recent changes:
 1. Update code to use OOP, will be useful when making testimonials page (instead of repeating code, just instantiate a new object)
 2. Have all sections move fully at once (instead of one at a time like earlier
 3. Currently only updates distance based on percentages (should be changed to allow any form of measurement)
  */


  class sectionAnimation {
        constructor(sectionClass, animationTime, firstSection) { //expects a string, integer, and integer respectively
            this.class = sectionClass;
            this.animationTime = animationTime;
            this.sections = document.getElementsByClassName(sectionClass);
            this.count = 0;
            this.currentSection = firstSection;
        }

        pause() {
            this.count++;
        }

        animation(section, mSeconds, direction, distance) { //expects an elementObject, an integer, a string with -= or +=, and a string
            $(section).animate({
                marginLeft: direction + distance
            }, mSeconds);
        }

        switchPage(index) { //expects an integer
            var i;
            while(index !== this.currentSection) {
                var distance = (100*Math.abs(index-this.currentSection)).toString() +"%"; //calculate total distance for all sections to move
                if(index > this.currentSection) { //move to the right
                    for(i=0; i<this.sections.length; i++) {
                        this.animation(this.sections[i], 500, "-=", distance);
                    }
                    setTimeout(this.pause(), 510);
                    this.currentSection=index;
                }

                if(index < this.currentSection) { //move to the left
                    for(i=0; i<this.sections.length; i++) {
                        this.animation(this.sections[i], 500, "+=", distance);
                    }
                    setTimeout(this.pause(), 510);
                    this.currentSection=index;
                }
            }
        }
    }

    var resumeSections = new sectionAnimation("section", 500, 0);