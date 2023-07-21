async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()

    let list = document.querySelector('.postcontainer')
    let key;
    for (key in content){
        list.innerHTML += `
            <li class="post">
            <h3 class="post-title"> ${content[key].title} </h3>
            <p class="post-content"> ${content[key].body} </p>
            </li>
        `
    }
}
getResponse()