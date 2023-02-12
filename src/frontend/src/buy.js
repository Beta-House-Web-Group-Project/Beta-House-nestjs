async function display(){
    const response =await fetch(
        "http://localhost:3000/houses",
        {
            method: "GET",  
        }
    )

    const houses = await response.json();

    let temp = ""
    houses.forEach(house => {
        temp += `
        <div class="col">
                          <a href="description.html?id=4"><div class="pt-3 border bg-light">
                            <img src="${house.picturePath}"  class=" w-100 h-100  shadow-lg rounded-6 "
                            alt="Skyscrapers" />
                          </div></a>

                          <div  class="d-flex flex-column align-items-center">
                            <h3>${house.name}</h3>
                            <p> ${house.price}</p>
                            <details>
                                <summary></summary>
                                <span>${house.bedroom}</span>
                                <span>${house.salon}</span>
                                <span>${house.bathroom}</span>
                            </details>
                        </div>
                </div>

        `
    });
    document.querySelector(".well").innerHTML = temp
}
display()

