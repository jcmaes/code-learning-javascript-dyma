console.log(history);

let inputStateValue;
let inputValue;
const input = document.querySelector('#myinput');

const createArticles = articles => {
    const articlesDOM = articles.map(article => {
        const articleDom = document.createElement('div');
        articleDom.classList.add('article');
        articleDom.innerHTML = `
<img src="${article.image}" alt="profile">
<h2>${article.title}</h2>
<p class="article-author">${article.author} - ${new Date(article.createdAt).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
})}</p>
<p class="article-content">${article.content}</p>
<div class="article-actions">
    <button class="btn btn-danger" data-id="${article._id}">Delete</button>
</div>
`;
        return articleDom;
    });
    // console.log(articlesDOM);
    articleContainerElement.innerHTML = '';
    articleContainerElement.append(...articlesDOM);
    const deleteButtons = articleContainerElement.querySelectorAll('.btn-danger');
    // console.log(deleteButtons);
    deleteButtons.forEach( button => {
        button.addEventListener('click', async event => {
            try {
                const target = event.target;
                const articleId = target.dataset.id;
                const response = await fetch(`https://restapi.fr/api/articles/${articleId}`, {
                    method: "DELETE"
                });
                // const body = await response.json();
                // console.log(body);
                fetchArticle();
            } catch (e) {
                console.log('e: ', e);
            }
        });
    });
};
const fetchArticle = async () => {
    try {
        const response = await fetch("https://restapi.fr/api/articles");
        const articles = await response.json();
        // console.log(articles);
        createArticles(articles);
    } catch (e) {
        console.log("e:", e);
    }
}

 fetchArticle();
