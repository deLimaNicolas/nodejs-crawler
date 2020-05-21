import cheerio from 'cheerio';
import request from 'request-promise';

const getMercadoLivreData = async (search: string, limit: number = 10): Promise<any[]> => {
    try {
        const body: string = await request(`https://lista.mercadolivre.com.br/${search}`);
        const $ = cheerio.load(body);
        const firstPageData = [];

        $('.item__info-title').each(function (i) {
            if (!firstPageData[i] && i < limit) firstPageData[i] = {};
            i < limit ? firstPageData[i].name = $(this).text() : null;
        });
        $('.price__fraction').each(function (i) {
            i < limit ? firstPageData[i].price = $(this).text() : null;
        });
        $('.item__brand-title-tos').each(function (i) {
            i < limit ? firstPageData[i].store = $(this).text().slice(4) : null;
        });
        $('.image-content').each(function (i) {
            i < limit ? firstPageData[i].link = $(this).find('a').attr('href') : null;
        });

        return firstPageData;

    } catch (err) {
        throw new Error('NO_RESULTS_FOUND');
    }
};
export default getMercadoLivreData;
