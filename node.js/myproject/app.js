var express = require(`express`);
var app = express();
var path = require(`path`);

app.set(`view engine`, `ejs`);

const user = {
  firstName: `Anas rul`,
  lastName: `Adam`,
  admin: true,
};

const posts = [
  { title: `Title 1`, body: `Body 1` },
  { title: `Title 2`, body: `Body 2` },
  { title: `Title 3`, body: `Body 3` },
];

const employee = [
  {
    name: `Munn Faye`,
    age: 23,
    department: `Back-end DevOps`,
    tenure: 5,
    quote: `While many of us never knew Ronald Reagan personally, we felt close to him because we shared his lighthearted sense of humor, admired his uncommon virtue, and were moved by his remarkable wisdom.`,
  },
  {
    name: `Anas Rul`,
    age: 25,
    department: `Cleaner`,
    tenure: 2,
    quote: `I needed to be in the bush. There I find solitude and beauty and purity and focus. That's where my heart lies.
    `,
  },
  {
    name: `Vinothini Faye`,
    age: 24,
    department: `Front-end Development`,
    tenure: 0.3,
    quote: `The senior officer who met with reporters in Baghdad said there had been 21 car bombings in the capital in May, and 126 in the past 80 days. All last year, he said, there were only about 25 car bombings in Baghdad.`,
  },
  {
    name: `Jia Wei`,
    age: 25,
    department: `Front-end Senior`,
    tenure: 6,
    quote: `Prediction is extremely difficult. Especially about the future.`,
  },
  {
    name: `Deilan`,
    age: 22,
    department: `Mobile Development Lead`,
    tenure: 1,
    quote: `Crime is terribly revealing. Try and vary your methods as you will, your tastes, your habits, your attitude of mind, and your soul is revealed by your actions.`,
  },
];

app.get(`/`, function (req, res) {
  res.render(`index`);
});

app.get(`/about`, function (req, res) {
  res.render(`about`, { user: user });
});
app.get(`/admin`, function (req, res) {
  res.render(`admin`, { user: user });
});

app.get(`/articles`, function (req, res) {
  res.render(`posts`, {
    posts: posts,
  });
});

app.get(`/employee`, function (req, res) {
  res.render(`employee`, {
    employee: employee,
  });
});
app.get(`/registerForm`, function (req, res) {
  res.render(`registerForm`);
});
app.get(`/registerSuccess`, function (req, res) {
  res.render(`registerSuccess`);
});
app.post(`/register`, function (req, res) {
  res.redirect(`registerSuccess`);
});
app.listen(3000);
console.log(`Server is running on port 3000`);
