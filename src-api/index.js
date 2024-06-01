const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());

async function fetchFitGirlPage(pageNumber) {
   try {
      console.log(`Buscando dados da página ${pageNumber}...`);
      const response = await axios.get(`https://fitgirl-repacks.site/page/${pageNumber}/`);
      const html = response.data;
      const $ = cheerio.load(html);

      let results = [];

      $('article').each((index, element) => {
         const title = $(element).find('.entry-title a').text();
         const link = $(element).find('.entry-title a').attr('href');
         const magnetLink = $(element).find('a[href^="magnet:?"]').attr('href');
         const postDate = $(element).find('.entry-date time').attr('datetime');
         const imageLink = $(element).find('.entry-content img').attr('src'); // Add this line

         if (title && magnetLink && postDate && imageLink) {
            results.push({ title, link, magnetLink, postDate, imageLink });
         }
      });

      return results;
   } catch (error) {
      console.error('Erro ao buscar dados da página:', error.message);
      return [];
   }
}

async function fetchFitGirlData(searchTerm = '') {
   try {
      const maxPages = 50;
      let currentPage = 1;
      let found = false;
      let results = [];

      async function fetchPageAndSearch(pageNumber) {
         const response = await fetchFitGirlPage(pageNumber);
         for (const post of response) {
            if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
               results.push(post);
               found = true;
               break;
            }
         }
      }

      const fetchPromises = [];
      while (currentPage <= maxPages && !found) {
         fetchPromises.push(fetchPageAndSearch(currentPage));
         currentPage++;
      }

      await Promise.all(fetchPromises);

      return results;
   } catch (error) {
      console.error('Erro ao buscar dados:', error.message);
      return [];
   }
}

app.get('/', async (req, res) => {
   const pageNumber = req.query.p;
   if (pageNumber) {
      const data = await fetchFitGirlPage(pageNumber);
      if (data) {
         res.json(data);
      } else {
         res.status(500).json({ error: 'Falha ao buscar dados' });
      }
   } else {
      const searchTerm = req.query.q;
      const data = await fetchFitGirlData(searchTerm);
      if (data) {
         res.json(data);
      } else {
         res.status(500).json({ error: 'Falha ao buscar dados' });
      }
   }
});

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});