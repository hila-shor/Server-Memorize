
const express = require('express');
const app = express();

// listen for request
app.listen(3000);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getting-cards', (req,res) => {
  res.json([
    {"classic1cards": [
      ["https://publicdomainvectors.org/tn_img/princess-in-red-dress.webp" , 1],
      ["https://publicdomainvectors.org/tn_img/princess-in-red-dress.webp" , 1],
      ["https://publicdomainvectors.org/tn_img/tropical-coconut-cocktail.webp" , 2],
      ["https://publicdomainvectors.org/tn_img/tropical-coconut-cocktail.webp" , 2],
      ["https://publicdomainvectors.org/tn_img/baby-with-lolipop.webp" , 3],
      ["https://publicdomainvectors.org/tn_img/baby-with-lolipop.webp" , 3],
      ["https://publicdomainvectors.org/tn_img/screaming-teenage-girl.webp" , 4],
      ["https://publicdomainvectors.org/tn_img/screaming-teenage-girl.webp" , 4],
      ["https://publicdomainvectors.org/tn_img/woman-surfboard-public-domain-vector.webp" , 5],
      ["https://publicdomainvectors.org/tn_img/woman-surfboard-public-domain-vector.webp" , 5],
      ["https://publicdomainvectors.org/tn_img/man-playing-violin-publicdomain.org.webp" , 6],
      ["https://publicdomainvectors.org/tn_img/man-playing-violin-publicdomain.org.webp", 6] ]
    },

    { "classic2cards": [
      ["https://lh3.google.com/u/0/d/1MGD9RRaGXj5YUZFV8yxVXTvysa4H7iqc=w1915-h1957-iv1" , 1],
      ["https://lh3.google.com/u/0/d/1MGD9RRaGXj5YUZFV8yxVXTvysa4H7iqc=w1915-h1957-iv1" , 1],
      ["https://lh3.google.com/u/0/d/1T5nJy2etbiURFnd69sGcD54q0d71EA6k=w3295-h1997-iv1" , 2],
      ["https://lh3.google.com/u/0/d/1T5nJy2etbiURFnd69sGcD54q0d71EA6k=w3295-h1997-iv1" , 2],
      ["https://lh3.google.com/u/0/d/1laLdeAJvmI0wJspk94VapVFDgSz8wa6S=w2000-h1186-iv1" , 3],
      ["https://lh3.google.com/u/0/d/1laLdeAJvmI0wJspk94VapVFDgSz8wa6S=w2000-h1186-iv1" , 3],
      ["https://lh3.google.com/u/0/d/16lqMRmBLRQBGrMwcHK6d7fOp4-0hk785=w2000-h1186-iv1", 4],
      ["https://lh3.google.com/u/0/d/16lqMRmBLRQBGrMwcHK6d7fOp4-0hk785=w2000-h1186-iv1" , 4],
      ["https://lh3.google.com/u/0/d/1FZeX_n9nPQ_nD6V9R8v-FOdupHzDDLV-=w1917-h1918-iv1" , 5],
      ["https://lh3.google.com/u/0/d/1FZeX_n9nPQ_nD6V9R8v-FOdupHzDDLV-=w1917-h1918-iv1" , 5],
      ["https://lh3.google.com/u/0/d/1ly9YEDgIqOULFWrMmYUKUgSuf-kwLnwv=w1245-h1918-iv1" , 6],
      ["https://lh3.google.com/u/0/d/1ly9YEDgIqOULFWrMmYUKUgSuf-kwLnwv=w1245-h1918-iv1", 6] ]
    }
    
  ]);
});