// var a = $("div")
// a.css({
//     width:"100px",
//     height:"200px",
//     background: "red"   
// }).click(function() {
//     a.slideUp(1000, function() {
//         a.slideDown(1200);
//     });
// })

// $(function(){
//     item = $("li")
//         .css({
//             float:"left",
//             listStyle:"none"
//         })
//         .children()
//         .css({
//             padding:"10px",
//             textTransform:"uppercase",
//             textDecoration: "none"
//         })
//         .click(function(){
//             $(this)
//             .css("color","red")
//         })
// }) 

$(window).click(function(){
    var xyz =$(".box div:even").css({
        width:"33%",
        height:"300px",
        background:"red",
        float:"left"
    })
    .click(function(){
        $(this).css({
            border:"4px solid blue"
        })
    })
        
    var xyz1 =$(".box div:odd").css({
        width:"33%",
        height:"300px",
        background:"black",
        float:"left"
    })
    .click(function(){
        $(this).css({
            border:"4px solid yellow"
        })
    })
            
    
    // xyz.css({
        
    // })
    // for (var i = 0; i < $("div").length; i++) {
    //     $("div").eq(i).css({
    //         height: "100px",
    //         background: "red",
    //         width: $("body").width()/8+"px",
    //         marginRight: $("body").width()/8+"px",
            
    //         float: "left"
    //     });
        
    // }
    
})