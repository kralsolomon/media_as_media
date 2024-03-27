const articlesContainer = document.getElementById('container');
const articleTemplate = document.getElementById('article-template');



function loadArticleById(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            renderArticle(post);
        })
        .catch(error => {
            console.error(`Error fetching post with ID ${postId}:`, error);
        });
}

function renderArticle(article) {
    const clone = document.importNode(articleTemplate.content, true);

    clone.querySelector('.title').textContent = article.title;
    clone.querySelector('.body').textContent = article.body;

    articlesContainer.appendChild(clone);
}

loadArticleById();





