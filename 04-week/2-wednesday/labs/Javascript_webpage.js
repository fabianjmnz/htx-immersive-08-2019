
buildPage();



function buildPage(){
    var container = document.getElementById("container");
    container.appendChild(headline());
    container.appendChild(block1());
    container.appendChild(blog());
    container.appendChild(blog1());
  
}
function headline(){
    var para = document.createElement("h1");
    var node = document.createTextNode("HighOnCoding");
    var home = document.createTextNode("\nHome");  
    var cat = document.createTextNode("\nCategories");
    para.appendChild(node);
    para.appendChild(home);
    para.appendChild(cat);
    para.style.color = "white";
    para.style.padding = " 30px 20px";
    var element = document.createElement("p");
    element.style.backgroundColor = "#5399e2";
    element.style.width = "90vw";
    element.style.margin = "auto";
    element.style.wordSpacing = "2em";
    element.appendChild(para);
   
    
    
    return element;

}

function block1(){
    var para = document.createElement("h1");
    var node = document.createTextNode("Curse of the Current Reviews");
    para.style.color = "#464040";
    para.style.paddingTop = "15px";
    para.appendChild(node);
    var element = document.createElement("p");
    element.style.paddingBottom = "10px";  // Ask why when ALL padding is 10px it adjusts the title by a lot!
    element.style.backgroundColor = "lightgrey";
    element.style.paddingLeft ="20px";
    element.style.width = "80vw";
    element.style.margin = "auto";
    element.appendChild(para);
    var node1 = document.createTextNode("When you wnat to buy any application from the Apple iTunes store you have more choices than you cna handle. Most of the users scroll past the application description completely avoiding it like ads displaying onthe right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.");
    element.appendChild(node1);
    return element;
}

function blog(){
    var para = document.createElement("h3");
    var node = document.createTextNode("Hello WatchKit");
    para.style.color = "blue";
    para.style.fontWeight = "2";
    para.style.fontSize = "25px";
    para.style.marginBottom = "10px";
    para.appendChild(node);
    var element = document.createElement("p");
    element.appendChild(para);
    var node1 = document.createTextNode("Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit freamwork and developing apps for the Apple Watch.");
    element.appendChild(node1);
    element.style.width = "80vw";
    element.style.margin = "auto";
    var element1 = document.createElement("p");
    element.appendChild(element1);
    var node2 = document.createTextNode("12comments");
    var node3 = document.createTextNode("\n124likes");
    element1.style.backgroundColor = "darkorange";
    element1.style.width = "80vw";
    element1.style.margin = "auto";
    element1.style.padding = "10px";
    element1.style.color = "white";
    element1.appendChild(node2);
    element1.appendChild(node3);
    element1.style.wordSpacing = "2em";
    return element;
}
function blog1(){
    var para = document.createElement("h3");
    var node = document.createTextNode("Introduction to Swift");
    para.style.color = "blue";
    para.style.fontWeight = "4";
    para.style.fontSize = "25px";
    para.appendChild(node);
    var element = document.createElement("p");
    element.appendChild(para);
    var node1 = document.createTextNode("Swif is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly refelects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.");
    element.appendChild(node1);
    element.style.width = "80vw";
    element.style.margin = "auto";
    var element1 = document.createElement("p");
    element.appendChild(element1);
    var node2 = document.createTextNode("15comments");
    var node3 = document.createTextNode("\n45likes"); 
    element1.style.backgroundColor = "darkorange";
    element1.style.width = "80vw";
    element1.style.margin = "auto";
    element1.style.padding = "10px";
    element1.style.color = "white";
    element1.appendChild(node2);
    element1.appendChild(node3);
    element1.style.wordSpacing = "2em";
    return element;
}

function color(){
    
    var node2 = document.createTextNode("comments");
    element1.style.backgroundColor = "red";
    element1.appendChild(node2);
    return element1;
}