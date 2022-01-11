$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 1000);
    });
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [{
            url: 'https://shrihith93.blogspot.com/2021/12/turtleracegame-python.html',
            title: 'Turtle_Race_Game',
        },
        {
            url: 'https://shrihith93.blogspot.com/2021/12/pythontaskassignment.html',
            title: 'Python_Task_Assignment',
        },
        {
            url: 'https://shrihith93.blogspot.com/2021/12/python-quiz-game-gui-from-shrihith-a.html',
            title: 'PYTHON QUIZ GAME GUI FROM SHRIHITH A',
        },
    ];

    let post_html = [];

    for (let post of posts) {

        let tags;

        if (post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://shrihith93.blogspot.com');">

        <div class="blog-link">

            <h3><a href="https://shrihith93.blogspot.com">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}