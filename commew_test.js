Feature("");

// Top
Scenario("Top page", ({ I }) => {
  I.amOnPage("/");
  I.see("ゆるく、つながる、たすけあう", '//*[@id="page"]/section[2]/div/h2');
  I.saveScreenshot("top_page.png");
});

// Login
Scenario("Login page", ({ I }) => {
  const username = process.env.E2E_USERNAME;
  const password = process.env.E2E_PASSWORD;
  if (!username || !password)
    throw new Error(
      "環境変数にE2E_USERNAMEかE2E_PASSWORD、または両方が設定されていません"
    );
  I.amOnPage("/");
  I.click("ログイン");
  I.see("ログイン");

  I.click("Twitterアカウントでログイン");

  I.fillField('//*[@id="username_or_email"]', username);
  I.fillField('//*[@id="password"]', password);
  I.click("ログイン");

  I.see("アカウント情報");

  I.saveScreenshot("login_page.png");

  I.amOnPage("/login");
  I.see("HOME");
  I.see("アカウント情報");
  I.see("ログアウト");
});

// Slackチャンネル紹介
Scenario("Slack page", ({ I }) => {
  I.amOnPage("/home");
  I.click("ログアウト");
  I.see("お問い合わせ");

  I.amOnPage("/");
  I.scrollTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[1]');
  I.saveScreenshot("scrollTo.png");

  I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[1]');
  I.see("仕事で分からないことがあったときに使うチャンネル");
  I.saveScreenshot("slack01.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[2]/div');
  // I.see("愚痴");
  // I.saveScreenshot("slack02.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[3]/div');
  // I.see("エピソード");
  // I.saveScreenshot("slack03.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[4]/div');
  // I.see("イベント");
  // I.saveScreenshot("slack04.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[5]/div');
  // I.see("サロン");
  // I.saveScreenshot("slack05.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[6]/div');
  // I.see("モチベーション");
  // I.saveScreenshot("slack06.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[7]/div');
  // I.see("もくもく");
  // I.saveScreenshot("slack07.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[8]/div');
  // I.see("エージェント");
  // I.saveScreenshot("slack08.png");

  // I.moveCursorTo('//*[@id="page"]/section[3]/div/div/div[2]/ul/li[9]/div');
  // I.see("アウトプット");
  // I.saveScreenshot("slack09.png");

  const username = process.env.E2E_USERNAME;
  const password = process.env.E2E_PASSWORD;
  if (!username || !password)
    throw new Error(
      "環境変数にE2E_USERNAMEかE2E_PASSWORD、または両方が設定されていません"
    );
  I.amOnPage("/");
  I.click("ログイン");
  I.see("ログイン");

  I.click("Twitterアカウントでログイン");
  I.see("アカウント情報");
});

// メンバー紹介ページ
Scenario("Member page", ({ I }) => {
  I.amOnPage("/");
  I.click("メンバー紹介");
  I.see("スキルで探す");

  I.click(
    "body > section > div > div.message.search > div.message-header > button"
  );

  const element =
    "body > section > div > div.message.search > div.message-body > form";
  I.see("ライティング", element);
  I.see("イラスト", element);
  I.see("デザイン", element);

  I.see("HTML", element);
  I.see("CSS", element);
  I.see("PHP", element);
  I.see("Python", element);

  I.moveCursorTo(
    "body > section > div > div.wrappper.profile > div > div:nth-child(1) > div"
  );
  I.see("とことん自由に働きたい");

  I.saveScreenshot("member-page.png", true);
});

// アカウント情報ページ
Scenario("Account page", ({ I }) => {
  I.amOnPage("/home");
  I.click("アカウント情報");

  I.see("設定（アカウント情報）");

  I.scrollTo("body > section > div > div > form > div:nth-child(9) > label");
  I.click(
    "body > section > div > div > form > div:nth-child(9) > div.control > label:nth-child(2)"
  );
  I.see("エピソード(フリーランスという働き方を選んだ・興味を持ったきっかけ)");

  I.click(
    "body > section > div > div > form > div:nth-child(9) > div.control > label:nth-child(1)"
  );
  I.dontSee(
    "エピソード(フリーランスという働き方を選んだ・興味を持ったきっかけ)"
  );
  I.saveScreenshot("account.png", true);
});

// ログアウト
Scenario("Logout page", ({ I }) => {
  I.amOnPage("/home");
  I.click("ログアウト");
  I.see("お問い合わせ");

  I.click("ログイン");
  I.see("ユーザーID");

  I.amOnPage("/settings");
  I.see("ユーザーID");
  I.saveScreenshot("logout.png", true);
});
