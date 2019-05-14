export default function filterClasses(classes,base){


    //return classes.join(" ")+" "+base
    if(Array.isArray(classes)){
        let base = classes;
        let classes = []
    }
    return [...classes,"",...base.split(" ")].join(" ")


}
