var arr=[
    {name:"Note letters", image:"https://i.pinimg.com/474x/76/97/f8/7697f8dce2f43372d50432794b6e7906.jpg"},
    {name:"Shoe", image:"https://i.pinimg.com/474x/05/2f/42/052f42a29273fe583f6040fe724a9add.jpg"},
    {name:"Style", image:"https://i.pinimg.com/474x/dd/ea/43/ddea438581e4a001c4687e2011b7c950.jpg"},
    {name:"Hair style", image:"https://i.pinimg.com/474x/81/e1/c0/81e1c0c0329a2b13d76e4b3aaf0720e6.jpg"},
    {name:"Girl", image:"https://i.pinimg.com/474x/25/3b/aa/253baa1e4469651f3730689fc63e5577.jpg"},
    {name:"Style", image:"https://i.pinimg.com/474x/3f/e7/92/3fe792c0ba45abd705ba7b33dfee97cd.jpg"},
    {name:"Boy", image:"https://i.pinimg.com/474x/aa/71/a2/aa71a2c45e3d5e57f2c8b45623f98ccd.jpg"},
    {name:"Style", image:"https://i.pinimg.com/474x/58/f0/1f/58f01fa818bf52b178eceb0121c94a30.jpg"},
    {name:"Shoe", image:"https://i.pinimg.com/474x/9e/42/b4/9e42b4d34f48b674542f414c00e59e0e.jpg"},
    {name:"Petals of roses", image:"https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showImages(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box"> 

                <div class="overlay">
                    <div class="overlaybox"></div>
                    <button>Save</button>
                    <div class="icons"><i class="ri-share-2-line"></i>
                        <i class="ri-more-fill"></i></div>
                    
                </div>

                <img src="${obj.image}" alt="">
                    </div>
            `;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
    
}

function handleSearchFunctionality(){
    var input = document.querySelector(".searchtab")

   
}



handleSearchFunctionality();
showImages();


