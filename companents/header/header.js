const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src="https://s3-alpha-sig.figma.com/img/2e45/854f/a6dab9efd151ebcd01788f60cd512274?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tnrBWwQiTsc~EU3KXzsvuMRzESTajQHbAKvj4qwzgnnd34Ewd7lCAwIpoZXDz8qU~Q2QNFPX5Wb882P3rFjKSUEI8pYhu5YY-giQb~6-1Ij7aELsUduJdOdTkSkDNICpcXQB4PrmfLNlovhsWVZXXDuAVyYnnd2oOWNDnsCWI-P8DuLXCNVRkQCUBeG4qz379GgWUbPg8tTOUWan5pzMXVZ5aGL9enX6fu6cKlMjfyf-ygcgdEs4~9pewswmaI~hSFIbDE7w2b--HH6QbCww82rrE8T37YeREeEQ08LevY3yVkLwwJ7idQAAoECUKcyMRpjpHZV5vGLlhrSJhRcnaA__" alt="" />
            </div>
            <div className="header_search">
                <form action="">
                    <input type="search" className="search" placeholder="Введите название товара или заболевания"/>
                    <i class="fas fa-search search-input-icon"></i>
                </form>
            </div>
            <div className="header_language">
                <div className="header_change_language">
                    <div className="language_group">
                        <img src="../../image/russian.png" alt="flags" />
                    </div>
                    <i onclick="icon(this)" class="fa-solid fa-angle-down"></i>                
                </div>
                <div id="language_group" className="header_change_language">
                    <div className="language_group">
                        <img src="../../image/uzbek.png" alt="" />
                        <img src="../../image/english.png" alt="flags" />
                    </div>
                </div>                
            </div>
            <div className="header_btn">
                <button>
                    <a href="#">Войти/</a>
                    <a href="#">Регистрация</a>
                </button>
            </div>
        </div>
    );
};

function icon(id) {
    id.style.color = 'red';
}