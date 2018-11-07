/* section code */

class SectionAnimation {
    constructor(sectionWrapper, direction) { //sectionWrapper expects an Element object, direction expects a String
        this.wrapper = sectionWrapper; //wrapper for sections
        this.sections = this.wrapper.childNodes; //the sections
        this.direction = direction; //north, south, east, or west for animation direction
        this.applyAnimationStyling(this.wrapper);
    }

    switchPage(index) {
        /* code here... */
    }

    applyAnimationStyling(wrapper) {
        /* code here...*/
    }


}