// var searchContainer = $("#search-container")
// var topHeight = $('h1').height()+"px";
// $(searchContainer).css("top",topHeight);



function displayImages(data){
    var photos = data.photos;
    if(photos.length!==0){
        $("#container").html(" ");
        photos.forEach(i => {
            var image = $(document.createElement("img"))
            image.attr({
                src:i.img_src,
                class:"image"
                })
            $("#container").append(image);
        }); 
    }else{
        alert("Photos are not available for this date yet")
    }
    
}


$("#get-images").click(()=>{
    var date = $("#date-picker").val();
    var solDate = $("#sol-picker").val();
    var page =$("#page").val();
    if(solDate&&page){
        $.ajax({
            url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
            method:"GET",
            success: displayImages,
            data: { 
                api_key:"uRDtOi8zlPEyqaLnKxGCb6NkEMCuhbFCT9oXruQI",
                earth_date:date,
                sol:solDate,
                page: page
            }
        });
    }else{
        alert("Please Select a Date And Click On Get Images")
    }
})





