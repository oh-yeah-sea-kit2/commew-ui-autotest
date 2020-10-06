Feature('view');

Scenario('test something', ({ I }) => {
    I.amOnPage('/')
    I.see('ゆるく、つながる、たすけあう', '//*[@id="page"]/section[2]/div/h2')
    I.saveScreenshot('top_page.png')

    I.scrollPageToBottom()
    I.saveScreenshot('top-bottom_page.png')

    I.click('ログイン', '//*[@id="page"]/section[1]/nav/div/ul/li[1]/a')
    I.see('ログイン')
    I.saveScreenshot('login_page.png')
});
